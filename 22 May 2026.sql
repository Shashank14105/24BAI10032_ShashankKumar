show databases;
show tables from vitcampus;
use vitcampus;

-- Mysql Join Data (inner Join)

create table departments(
did int primary key,
dname varchar(25) not null unique
);

insert into departments values
(101,'CSE'),(102,'ECE'),(103,'Civil'),(106,'Aero'),(107,'Mech');

select * from departments order by did;

create table HOD
(Hid int primary key,
hname varchar(20) not null unique);

insert into HOD values
(101,'Arun'),(102,'Jayanth'),(104,'Karthik'),
(105,'Murali');

select * from HOD;

SELECT * FROM 
departments CROSS JOIN hod order by did asc;

select * from departments inner join
hod where departments.did=hod.hid;

select * from departments natural join hod;

SELECT * FROM departments LEFT OUTER JOIN
hod ON (departments.did = hod.hid) order by did asc;

SELECT * FROM departments FULL JOIN
Hod ON (departments.did = Hod.hid);
