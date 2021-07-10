CREATE SCHEMA IF NOT EXISTS blog;

USE blog;
CREATE TABLE tb_categories (
    id_categories INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL
) ENGINE = innodb;

CREATE TABLE tb_articles (
	id_articles INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    body TEXT NOT NULL,
    id_categories INT NOT NULL,
    FOREIGN KEY (id_categories) REFERENCES tb_categories(id_categories)
) ENGINE = innodb;

INSERT INTO tb_categories (title) VALUES ('Tecnologia'), ('Moda');
INSERT INTO tb_articles (body, id_categories) VALUES ('Este e um artigo de tec.', 1);
INSERT INTO tb_articles (body, id_categories) VALUES ('Aqui temos mais um artigo de tec.', 1);


SELECT a.Title as Categoria, b.body as Artigo
 FROM tb_categories as a 
  INNER JOIN tb_articles as b USING(id_categories);
