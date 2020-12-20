import pymysql
import db
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import os
import wave
import contextlib
import speech_recognition as sr

UPLOAD_FOLDER_AUDIO = 'BTACT/audio/'
UPLOAD_FOLDER_TEXT = 'BTACT/text/'

app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER_AUDIO
cors = CORS(app, resources={r"/*": {"origins": "http://localhost:4200"}})


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
            print(text)
        try:
            sql = "INSERT INTO BTACT (testID, path_audio, time, path_text, score) VALUES (%s, %s, %s, %s, %s)"
            val = (testID, UPLOAD_FOLDER_AUDIO + fname, time, UPLOAD_FOLDER_TEXT + fname1, 3)
            cursor.execute(sql, val)
            conn.commit()
        except Exception as e:
            print(e)
        finally: 
            cursor.close()
            conn.close()
        
    return 'file uploaded successfully'



if __name__ == "__main__":
    app.run()
    