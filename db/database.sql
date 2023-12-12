CREATE DATABASE IF NOT EXISTS djhones;

USE djhones;
CREATE TABLE employee(
     id INT(11) NOT NULL AUTO_INCREMENT,
    username VARCHAR(45) NOT NULL,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(45) DEFAULT NULL,
    area VARCHAR(45),
    PRIMARY KEY (id) 
    );