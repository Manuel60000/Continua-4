CREATE DATABASE productosdb;
USE productosdb;

CREATE TABLE IF NOT EXISTS productos (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(150) NOT NULL,
  descripcion TEXT,
  precio DECIMAL(10,2) NOT NULL,
  stock INT DEFAULT 0
);

INSERT INTO productos (nombre, descripcion, precio, stock) VALUES ('Hamburguesa','Hamburguesa simple',12.50, 10);
