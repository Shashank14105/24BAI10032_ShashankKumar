-- ===================================================
-- PHASE 1: DATABASE SELECTION & CLEANUP
-- ===================================================
SHOW DATABASES;
USE vitcampus;
SHOW TABLES FROM vitcampus;

-- Create a dummy 'cse' table if it doesn't exist so the alterations don't error out
CREATE TABLE IF NOT EXISTS cse (
    id INT,
    name VARCHAR(50),
    marks INT,
    dept VARCHAR(10),
    country VARCHAR(50)
);

SELECT * FROM cse;
DESC cse;

-- Modifying the cse table
ALTER TABLE cse ADD (
    sphn INT8, 
    sphn2 INT8
);

-- Note: Column count must match the 7 columns now in existence
INSERT INTO cse VALUES (106, 'Semi', 95, 'CSE', 'SriLanka', NULL, NULL);

ALTER TABLE cse DROP COLUMN sphn2;

ALTER TABLE cse ADD (
    sCountry VARCHAR(30) DEFAULT 'INDIA'
);

ALTER TABLE cse RENAME COLUMN sCountry TO SLocation;

SELECT * FROM cse;

-- Drop the table safely
DROP TABLE IF EXISTS cse;
SHOW TABLES FROM vitcampus;


-- ===================================================
-- PHASE 2: EEE TABLE OPERATIONS
-- ===================================================
-- Create a dummy 'eee' table if it doesn't exist so the rename doesn't fail
CREATE TABLE IF NOT EXISTS eee (
    id INT
);

DELETE FROM eee;
SELECT * FROM eee;

-- Rename 'eee' to 'ECE' (Drops 'ECE' first if it exists from a previous run)
DROP TABLE IF EXISTS ECE;
RENAME TABLE eee TO ECE;


-- ===================================================
-- PHASE 3: WORKER TABLE SETUP & MANIPULATION
-- ===================================================
DROP TABLE IF EXISTS Worker;

CREATE TABLE Worker (
    WORKER_ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    FIRST_NAME CHAR(25),
    LAST_NAME CHAR(25),
    SALARY INT(15),
    JOINING_DATE DATETIME,
    DEPARTMENT CHAR(25)
);

INSERT INTO Worker 
    (WORKER_ID, FIRST_NAME, LAST_NAME, SALARY, JOINING_DATE, DEPARTMENT) 
VALUES
    (001, 'Monika', 'Arora', 100000, '2020-02-14 09:00:00', 'HR'),
    (002, 'Niharika', 'Verma', 80000, '2011-06-14 09:00:00', 'Admin'),
    (003, 'Vishal', 'Singhal', 300000, '2020-02-14 09:00:00', 'HR'),
    (004, 'Amitabh', 'Singh', 500000, '2020-02-14 09:00:00', 'Admin'),
    (005, 'Vivek', 'Bhati', 500000, '2011-06-14 09:00:00', 'Admin'),
    (006, 'Vipul', 'Diwan', 200000, '2011-06-14 09:00:00', 'Account'),
    (007, 'Satish', 'Kumar', 75000, '2020-01-14 09:00:00', 'Account'),
    (008, 'Geetika', 'Chauhan', 90000, '2011-04-14 09:00:00', 'Admin');

SELECT * FROM Worker;

UPDATE Worker SET First_name='Jayanth', Last_name='V' WHERE WORKER_ID=1;

SET SQL_SAFE_UPDATES = 0;
UPDATE Worker SET SALARY = SALARY + 5000; 
SET SQL_SAFE_UPDATES = 1;

DELETE FROM Worker WHERE WORKER_ID=8;

SELECT * FROM Worker;


-- ===================================================
-- PHASE 4: TRANSACTION & SAVEPOINT PRACTICE 1 (CLASS TABLE)
-- ===================================================
-- Creating the missing 'class' table and seeding record 5 so the update works
DROP TABLE IF EXISTS class;
CREATE TABLE class (
    id INT,
    name VARCHAR(50)
);
INSERT INTO class VALUES (5, 'Old Name');

START TRANSACTION;
UPDATE class SET name = 'Abhijit' WHERE id = '5';
SAVEPOINT A;

INSERT INTO class VALUES(6, 'Chris');
SAVEPOINT B;

INSERT INTO class VALUES(7, 'Bravo');
SAVEPOINT C;

SELECT * FROM class;
COMMIT;


-- ===================================================
-- PHASE 5: TRANSACTION & SAVEPOINT PRACTICE (EMP TABLE)
-- ===================================================
-- 1. Table must be created BEFORE the transaction starts. 
-- DDL commands (like CREATE TABLE) cause an implicit commit and destroy transactions.
DROP TABLE IF EXISTS emp;
CREATE TABLE emp(id INT);

-- 2. Start the transaction cleanly
START TRANSACTION;

INSERT INTO emp VALUES (101);
SAVEPOINT time15;

INSERT INTO emp VALUES (102);
SAVEPOINT time16;

INSERT INTO emp VALUES (103);
SAVEPOINT time17;

-- First rollback to time17 works perfectly
ROLLBACK TO time17;

-- Insert a new value 
INSERT INTO emp VALUES (104);

-- Give this milestone a UNIQUE new savepoint name so it doesn't conflict
SAVEPOINT time18;

-- If you want to roll back to an earlier valid state, use an active upstream checkpoint
ROLLBACK TO time16;

-- Verify what survived the rollbacks
SELECT * FROM emp;

-- Commit to save changes permanently
COMMIT;