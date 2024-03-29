CREATE DATABASE Users;
use Users;

CREATE TABLE user (
  testID VARCHAR(10) NOT NULL PRIMARY KEY,  
  name VARCHAR(30) NOT NULL,
  surname VARCHAR(30) NOT NULL,
  age INT(3) NOT NULL,
  genre VARCHAR(15) NOT NULL
);

CREATE TABLE BTACT (
  testID VARCHAR(10) NOT NULL PRIMARY KEY,  
  path_audio VARCHAR(50) NOT NULL,
  time INT(3) NOT NULL,
  path_text VARCHAR(50) NOT NULL,
  score INT(3) NOT NULL
);

CREATE TABLE WRITTEN_SYMBOL (
  testID VARCHAR(10) NOT NULL PRIMARY KEY,
  score_test INT(3) NOT NULL,
  timeWritten INT(3) NOT NULL
);

CREATE TABLE ARROW_TEST (
  testID VARCHAR(10) NOT NULL PRIMARY KEY,
  RT_total FLOAT(10, 3) NOT NULL,
  rightAnswer INT(3) NOT NULL,
  wrongAnswer INT(3) NOT NULL,
  path_RT_CSV VARCHAR(50) NOT NULL
);

CREATE TABLE PASSWORD (
  password VARCHAR(30) NOT NULL PRIMARY KEY
);

INSERT INTO `PASSWORD` 
  (`password`) 
VALUES 
  ('cognitiveApplication2020');

CREATE TABLE `Users`.`TEST_ID` ( `testID` VARCHAR(10) NOT NULL , PRIMARY KEY (`testID`)) ENGINE = InnoDB;

INSERT INTO `TEST_ID` 
  (`testID`) 
VALUES 
  ('1234a'),
  ('1234b'),
  ('1234c'),
  ('1234d'),
  ('1234e');
  
