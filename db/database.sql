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

CREATE DATABASE IF NOT EXISTS Dussan;

USE Dussan;

CREATE TABLE turnos_pacientes (
    id INT(11) NOT NULL AUTO_INCREMENT,
    numero_paciente INT(11) NOT NULL,
    letra_area VARCHAR(1) NOT NULL,
    area VARCHAR(45) NOT NULL,
    fecha_turno DATE NOT NULL,
    hora_entrada TIME NOT NULL,
    area_anterior VARCHAR(45) DEFAULT NULL,
    hora_entrada_anterior TIME DEFAULT NULL,
    PRIMARY KEY (id)
);