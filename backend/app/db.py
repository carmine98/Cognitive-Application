import mysql.connector as mysql
import os
import logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s :: %(levelname)s :: %(message)s')
DB_HOST = 'localhost'
DB_PORT = '3306'
DB_USER = 'root'
DB_PASS = 'root'

def get_connection():
    return mysql.connect(
        host=DB_HOST,
        port=DB_PORT,
        user=DB_USER,
        passwd=DB_PASS,
        database="Users"
    )