# udf_examen_mitad



## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files using the command line](https://docs.gitlab.com/ee/gitlab-basics/add-file.html#add-a-file-using-the-command-line) or push an existing Git repository with the following command:

```
cd existing_repo
git remote add origin https://gitlab.com/cesurformation/udf_examen_mitad.git
git branch -M main
git push -uf origin main
```
## Create database environment

you will need to create a docker-compose.yml field in your folder structure like this
```
version: "3.8"
services:
  mysql:
    image: mysql:latest
    container_name: mysql-container
    ports:
      - "3307"
    command: --init-file /data/application/init.sql
    environment:
        MYSQL_ROOT_USER: root
        MYSQL_ROOT_PASSWORD: secret
        MYSQL_DATABASE: examen
        MYSQL_USER: cesur
        MYSQL_PASSWORD: c3sur1234
    volumes:
      - ./data/db:/var/lib/mysql
      - ./init.sql:/data/application/init.sql
```
also in the same folder level is needed to create a sql instruction:
```
CREATE DATABASE IF NOT EXISTS examen;
USE examen;
CREATE TABLE examen.Product (
	name VARCHAR(256) NULL,
	brand VARCHAR(50) NULL,
	price DOUBLE NULL,
	discount_price DOUBLE NULL,
	image_url VARCHAR(256) NULL,
	quantity VARCHAR(50) NULL,
	category VARCHAR(50) NULL,
	sub_category VARCHAR(50) NULL,
	absolute_url VARCHAR(256) NULL
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_0900_ai_ci;
```
with that you will be able to create all the structure of the project
