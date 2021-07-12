DROP DATABASE IF EXISTS blog;
CREATE SCHEMA IF NOT EXISTS blog;

USE blog;
CREATE TABLE tb_categories (
    id_categories INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL,
    slug VARCHAR(50) NOT NULL
) ENGINE = innodb;

CREATE TABLE tb_articles (
	id_articles INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    body TEXT NOT NULL,
    id_categories INT NOT NULL,
    FOREIGN KEY (id_categories) REFERENCES tb_categories(id_categories)
) ENGINE = innodb;


