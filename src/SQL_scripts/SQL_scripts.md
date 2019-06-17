# Week 9 SQL script

/* 1 Using the tasksdb instance */

/* 2 create the Tasks database with the tasksdb instance */
CREATE DATABASE Tasks;

/* 2 use the Tasks database within the tasksdb instance */
USE Tasks;

/* 2 create the User table with userId as the PRIMARY KEY */

CREATE TABLE User (
userId int NOT NULL AUTO_INCREMENT,
username varchar(50) NOT NULL,
PRIMARY KEY (userId)
);

/* 2 show the structure of the User table  to check that the table has been 
created correctly */
DESCRIBE User; 


/* 2 create the Tasks table with taskId as the PRIMARY KEY */
/* userId is a FOREIGN KEY */

CREATE TABLE Tasks (
taskId int NOT NULL AUTO_INCREMENT,
description varchar(255) NOT NULL,
completed boolean NOT NULL DEFAULT false,
userId int NOT NULL,
PRIMARY KEY (taskId),
FOREIGN KEY(userId) REFERENCES User(userId) 
);

/* 2 show the structure of the Tasks table */
DESCRIBE Tasks; 

/* 3 insert users into the Users table – User 1 Susan */
INSERT INTO User (username)
VALUES("susan@bbc.co.uk");

/* 3 insert users into the Users table – User 2 Geoff */
INSERT INTO User (username)
VALUES("geoff@bbc.co.uk");


/* 3 view content of the User table – check userId for each person */
SELECT * from User;

/* 4 insert two tasks into the Tasks table for user Geoff */
INSERT INTO Tasks (description, completed, userId)
VALUES("Learn Javascript",false,2);

INSERT INTO Tasks (description, completed, userId)
VALUES("Learn MySQL",false,2);

/* 5 insert a task into the Tasks table for user Susan*/
INSERT INTO Tasks (description, completed, userId)
VALUES("Learn NodeJS",false,1);

/* 6 query to show all Geoff’s tasks in the Tasks table */
SELECT * FROM Tasks WHERE userId=2;

/* 7 query to show Susan’s task in the Tasks table */
SELECT * FROM Tasks WHERE userId=1;

/* 8 update the Tasks table to mark Geoff’s task "Learn Javascript" as completed */
UPDATE Tasks SET completed = true WHERE description = "Learn Javascript";

/* 8 might be better to use the taskId for the update above - avoids
updating more than one row if two tasks have the same description */
UPDATE Tasks SET completed = true WHERE taskId = 1;

/* 9 query to show all Geoff’s tasks in the Tasks table */
/*“Learn Javascript” should now be marked as completed */
SELECT * FROM Tasks WHERE userId=2;

/* 10 query to show all Geoff’s completed tasks in the Tasks table */
SELECT * FROM Tasks WHERE userId=2 AND completed = true;

/* June 2019  - add priority and due_date columns to the Tasks table */
ALTER TABLE Tasks ADD COLUMN due_date DATE AFTER description;

ALTER TABLE Tasks ADD COLUMN priority BOOLEAN NOT NULL DEFAULT false AFTER due_date;

/* show table design */
DESCRIBE Tasks;