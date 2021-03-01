import pymysql
import db
from flask import Flask, request, jsonify, Response
from flask_cors import CORS, cross_origin
import os
import wave
import contextlib
import speech_recognition as sr
from string import punctuation, whitespace
import io
import csv

UPLOAD_FOLDER_AUDIO = 'BTACT/audio/'
UPLOAD_FOLDER_TEXT = 'BTACT/text/'

app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER_AUDIO
cors = CORS(app, resources={r"/*": {"origins": "http://localhost:4200"}})

words = ['drum', 'curtain', 'bell', 'coffee', 'school', 'parent', 'moon', 'garden', 'hat', 'farmer', 'nose', 'turkey', 'color', 'house', 'river']

@app.route('/add', methods=['OPTIONS','POST'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def add_user():
        conn = db.get_connection()
        cursor = conn.cursor()
        try:
            _json = request.get_json()
            print(_json)
            _testID = _json['testID']
            _name = _json['name']
            _surname = _json['surname']
            _age = _json['age']
            _genre = _json['genre']
            # validate the received values
            if _testID and _name and _surname and _age and _genre and request.method == 'POST':
                # save edits
                sql = "INSERT INTO user (testID, name, surname, age, genre) VALUES (%s, %s, %s, %s, %s)"
                val = (_testID, _name, _surname, _age, _genre)
                cursor.execute(sql, val)
                conn.commit()
                resp = jsonify('User added successfully!')
                resp.status_code = 200
                cursor.close()
                return resp
            else:
                return not_found()
        except Exception as e:
            print(e)
        finally:
            cursor.close()
            conn.close()

@app.route('/users')
def users():
    try:
        conn = db.get_connection()
        cursor = conn.cursor(dictionary=True)
        cursor.execute("SELECT * FROM user")
        rows = cursor.fetchall()
        resp = jsonify(rows)
        resp.status_code = 200
        cursor.close()
        return resp
    except Exception as e:
        print(e)
    finally:
        conn.close()

@app.route('/users/<string:id>')
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def user(id):
    try:
        conn = db.get_connection()
        cursor = conn.cursor(dictionary=True)
        cursor.execute("SELECT * FROM TEST_ID WHERE testID=%s", (id,))
        row = cursor.fetchone()
        print(row)
        resp = jsonify(row)
        resp.status_code = 200
        cursor.close()
        return resp
    except Exception as e:
        print(e)
    finally:
        conn.close()


@app.errorhandler(404)
def not_found(error=None):
    message = {
        'status': 404,
        'message': 'Not Found: ' + request.url,
    }
    resp = jsonify(message)
    resp.status_code = 404

    return resp

@app.route('/uploadAudio', methods = ['GET', 'POST'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def upload_audio():
    if request.method == 'POST':
        f = request.files['audio_data']
        fname = f.filename + '_BTACT.wav'
        fname1 = f.filename + '_BTACT.txt'
        f.save(os.path.join(app.config['UPLOAD_FOLDER'], fname))
        testID = f.filename
        f.flush()
        f.close()
        with contextlib.closing(wave.open(UPLOAD_FOLDER_AUDIO + fname,'r')) as f:
            frames = f.getnframes()
            rate = f.getframerate()
            duration = frames / float(rate)
            time = int(float(duration))
        print(time)
        conn = db.get_connection()
        cursor = conn.cursor()
        r = sr.Recognizer()
        with sr.AudioFile(app.config['UPLOAD_FOLDER'] + fname) as source:
            # listen for the data (load audio to memory)
            audio_data = r.record(source)
            text = r.recognize_google(audio_data)
            outFile=open(UPLOAD_FOLDER_TEXT + fname1, "w")
            outFile.write(text)
            outFile.close()
            s=[]
            with open(UPLOAD_FOLDER_TEXT + fname1, "r") as myfile:
                content=myfile.read().split()
                for word in content:
                    if((word in punctuation) or (word in whitespace)) :
                        pass
                    else:
                        s.append(word.lower())
            print(s)
            print(text)
            count = 0
            for x in words:
                if x in s:
                    count = count + 1
            print(count)
        try:
            sql = "INSERT INTO BTACT (testID, path_audio, time, path_text, score) VALUES (%s, %s, %s, %s, %s)"
            val = (testID, UPLOAD_FOLDER_AUDIO + fname, time, UPLOAD_FOLDER_TEXT + fname1, count)
            cursor.execute(sql, val)
            conn.commit()
        except Exception as e:
            print(e)
        finally:
            cursor.close()
            conn.close()

    return 'file uploaded successfully'

@app.route('/uploadSymbolTest', methods = ['GET', 'POST'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def upload_symbol():
    conn = db.get_connection()
    cursor = conn.cursor()
    try:
        sequence = ['1', '4', '8', '2', '7', '6', '9', '3', '5', '8', '3', '1', '9', '2', '5', '6', '4', '3',
                '7', '2', '9', '8', '1', '4', '7', '6', '5', '9', '1', '2', '4', '7', '2', '5', '6', '9',
                '5', '8', '6', '4', '3', '1', '7', '8', '3', '1', '3', '9', '6', '3', '9', '7', '5', '1',
                '4', '2', '8', '7', '2', '8', '5', '6', '4', '7', '6', '4', '1', '3', '2', '8', '1', '7',
                '9', '2', '5', '3', '4', '8', '6', '5', '9', '8', '1', '9', '5', '1', '4', '2', '6', '9',
                '8', '7', '3', '5', '6', '4', '7', '2', '3', '3', '6', '8', '9', '1', '8', '4', '7', '5',
                '2', '9', '6', '7', '1', '5', '2', '3', '4', '6', '4', '1', '9', '5', '7', '3', '6', '8',
                '3', '2', '7', '5', '8', '4', '2', '9', '1', '6', '3', '8', '7', '1', '2', '6', '4', '9', '']

        mydict = dict()

        for index,value in enumerate(sequence):
            mydict[index] = value

        print(mydict)

        _json = request.get_json()
        print(_json)
        count = 0
        for key in _json:
            n = int(key)
            value = mydict.get(n)
            if value == _json[key]:
                count = count + 1
        print(count)
        testID = _json['144']
        time = _json['145']
        sql = "INSERT INTO WRITTEN_SYMBOL (testID, score_test, timeWritten) VALUES (%s, %s, %s)"
        val = (testID, count, time)
        cursor.execute(sql, val)
        conn.commit()
        resp = jsonify('Data received succesfull')
        resp.status_code = 200
        return resp
    except Exception as e:
        print(e)
    finally:
        cursor.close()
        conn.close()


@app.route('/uploadArrowTest', methods = ['GET', 'POST'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def upload_arrowtest():
    conn = db.get_connection()
    cursor = conn.cursor()
    try:
        _json = request.get_json()
        print(_json)
        testID = _json['0']
        print(testID)
        rt_total = _json['1']
        print(rt_total)
        totalScore = _json['2']
        print(totalScore)
        sql = "INSERT INTO ARROW_TEST (testID, RT_total, totalScore) VALUES (%s, %s, %s)"
        val = (testID, rt_total, totalScore)
        cursor.execute(sql, val)
        conn.commit()
        resp = jsonify('Data received succesfull')
        resp.status_code = 200
        return resp
    except Exception as e:
        print(e)
    finally:
        cursor.close()
        conn.close()

@app.route('/insertNewTestID', methods = ['POST'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def insert():
    conn = db.get_connection()
    cursor = conn.cursor()
    try:
        _json = request.get_json()
        print(_json)
        testId = _json['0']
        sql = "INSERT INTO TEST_ID (testID) VALUES (%s)"
        val = [(testId)]
        cursor.execute(sql, val)
        conn.commit()
        resp = jsonify('Data received succesfull')
        resp.status_code = 200
        return resp
    except Exception as e:
        print(e)
    finally:
        cursor.close()
        conn.close()

@app.route('/report', methods = ['POST', 'GET'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def report():
    conn = db.get_connection()
    cursor = conn.cursor(dictionary=True)
    try:
        _json = request.get_json()
        print(_json)
        testId = _json['0']
        cursor.execute("SELECT * FROM user INNER JOIN ARROW_TEST INNER JOIN BTACT INNER JOIN WRITTEN_SYMBOL WHERE user.testID = %s AND user.testID = WRITTEN_SYMBOL.testID AND user.testID = BTACT.testID AND user.testID = ARROW_TEST.testID", (testId,))
        row = cursor.fetchone()
        print(row)
        resp = jsonify(row)
        resp.status_code = 200
        cursor.close()
        return resp
    except Exception as e:
        print(e)
    finally:
        cursor.close() 
        conn.close() 

@app.route('/download', methods = ['POST', 'GET'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def download():
    conn = db.get_connection()
    cursor = conn.cursor(dictionary=True)
    try:
        cursor.execute("SELECT * FROM user INNER JOIN ARROW_TEST INNER JOIN BTACT INNER JOIN WRITTEN_SYMBOL WHERE user.testID = WRITTEN_SYMBOL.testID AND user.testID = BTACT.testID AND user.testID = ARROW_TEST.testID")
        result = cursor.fetchall()

        output = io.StringIO()
        writer = csv.writer(output)
   
        line = ['testID, name, surname, age, genre, path_audio, time_BTACT, path_text, score_BTACT, time_Arrow, score_Arrow, score_Symbol, time_Symbol']
        writer.writerow(line)
 
        for row in result:
            print(row)
            line = [row['testID'] + ';' + row['name'] + ';' + row['surname'] + ';' + str(row['age']) + ';' + row['genre'] + ';' + row['path_audio'] + ';' + str(row['time']) + ';' + row['path_text'] + ';' + str(row['score']) + ';' + str(row['RT_total']) + ';' + str(row['totalScore']) + ';' + str(row['score_test']) + ';' + str(row['timeWritten'])]
            writer.writerow(line)
 
        output.seek(0)
   
        return Response(output, mimetype="text/csv", headers={"Content-Disposition":"attachment;filename=db.csv"})
    except Exception as e:
        print(e)
    finally:
        cursor.close() 
        conn.close()           

if __name__ == "__main__":
    app.run()
