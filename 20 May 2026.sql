show databases;
use vitcampus;
show tables from vitcampus;

-- SQL Constraints ( are set of rules)
-- unique(email)
-- check( India, Canada)

-- keys (primary key and foreign keys)
-- ER diagram( project related things where we can start a project )


create table Persons (
	id int not null,
    lastname varchar(255) unique not null,
    firstname varchar(255) not null,
    age int
);

desc persons;

insert into persons values(101,'Jayanth','V',null);

ALTER TABLE Persons
ADD UNIQUE (AGE);

ALTER TABLE Persons
DROP CONSTRAINT Age;

select * from Persons;

create table Students (
	Student_ID int not null,
    Email varchar(255) unique not null,
    FullName varchar(255) not null
);

DESC Students;

INSERT INTO Students VALUES (201, 'shashank@vit.edu', 'Shashank Kumar', NULL);

ALTER TABLE Students 
ADD unique (Age);

ALTER TABLE Students 
DROP CONSTRAINT Email;

select * from Students;

-- Check cconstraints
drop table persons;
CREATE TABLE Persons (
	ID int NOT NULL,
	LastName varchar(255) NOT NULL,
	FirstName varchar(255) not null,
	Age int not null,
	CHECK (Age>=18 and age <=23)
);

alter table Persons 
add check (age>=18);

CREATE TABLE Persons1 (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    city varchar (255) default 'Coimbatore'
);

-- keys (primary key and foreign keys)
-- not null and unique is Primary Key

create table products(
pid int primary key,
pname varchar (100) not null,
prefNo int not null unique
);

desc products;
insert into products values (102,'furniture',19930);
select * from products;

alter table persons
add primary key (id);

alter table persons
drop primary key;

select * from persons;

-- is Foreign Key 

drop table products;

create table category(
cid int primary key,
cname varchar(100) not null
);

insert into category values (101,'electronics'),(102,'Home appliances');


create table products(
	pid int primary key,
	pname varchar(100) NOT NULL,
	cid int,
	FOREIGN KEY (cid) REFERENCES category(cid)
);

desc products;

insert into products values (101,'electronics'),(102,'Home appliances');

create table products(
pid int primary key,
pname varchar(100) not null,
prefNo int not null unique
);

desc products;

insert into products values (102,"furniture",19930);
select * from products;

ALTER TABLE Persons
ADD PRIMARY KEY (ID);

ALTER TABLE Persons
DROP PRIMARY KEY;
drop table products;
create table category(
cid int primary key,
cname varchar(100) not null
);

insert into category values (101,'electronics'),(102,'Home App');

select * from category;
drop table products;
CREATE TABLE products (
    pid int primary key,
    pname varchar(100) NOT NULL,
    cid int, 
    FOREIGN KEY (cid) REFERENCES category(cid)
);
desc products;

delete from category where cid=101;

INSERT INTO products VALUES (504, 'Power Bank Samsung', 102);

select * from products;


-- ===============
-- Error Resolved
-- ===============
-- Step 1: Delete the products referencing category 101
DELETE FROM products WHERE cid = 101;

-- Step 2: Now you can safely delete the category
DELETE FROM category WHERE cid = 101;

-- Drop the existing products table first
DROP TABLE products;

-- Re-create it with ON DELETE CASCADE
CREATE TABLE products (
    pid INT PRIMARY KEY,
    pname VARCHAR(100) NOT NULL,
    cid INT, 
    FOREIGN KEY (cid) REFERENCES category(cid) ON DELETE CASCADE
);

DROP TABLE products;

CREATE TABLE products (
    pid INT PRIMARY KEY,
    pname VARCHAR(100) NOT NULL,
    cid INT, 
    FOREIGN KEY (cid) REFERENCES category(cid) ON DELETE SET NULL
);
