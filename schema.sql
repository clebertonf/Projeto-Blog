DROP DATABASE IF EXISTS blog;
CREATE SCHEMA IF NOT EXISTS blog;

USE blog;
CREATE TABLE tb_categorie (
    id_categorie INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL,
    slug VARCHAR(50) NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE = innodb;

CREATE TABLE tb_article (
	id_article INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL,
    article TEXT NOT NULL,
    preview VARCHAR(100),
    slug VARCHAR(50) NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    id_categorie INT NOT NULL,
    FOREIGN KEY (id_categorie) REFERENCES tb_categorie(id_categorie)
) ENGINE = innodb;

CREATE TABLE tb_user (
    id_user INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(60),
    email VARCHAR(60) NOT NULL,
    password VARCHAR(60) NOT NULL
);
