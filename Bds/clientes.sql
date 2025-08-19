
CREATE DATABASE clientesdb;
USE clientesdb;

CREATE TABLE IF NOT EXISTS clientes (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  apellido VARCHAR(100),
  telefono VARCHAR(50),
  email VARCHAR(150)
);

INSERT INTO clientes (nombre, apellido, telefono, email) VALUES ('Luis','Martinez','3101112222','luis@rest.com');
