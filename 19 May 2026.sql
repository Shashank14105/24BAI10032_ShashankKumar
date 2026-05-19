CREATE TABLE Worker (
	WORKER_ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	FIRST_NAME CHAR(25),
	LAST_NAME CHAR(25),
	SALARY INT(15),
	JOINING_DATE DATETIME,
	DEPARTMENT CHAR(25)
);

INSERT INTO Worker 
	(WORKER_ID, FIRST_NAME, LAST_NAME, SALARY, JOINING_DATE, DEPARTMENT) VALUES
		(001, 'Monika', 'Arora', 100000, '14-02-20 09.00.00', 'HR'),
		(002, 'Niharika', 'Verma', 80000, '14-06-11 09.00.00', 'Admin'),
		(003, 'Vishal', 'Singhal', 300000, '14-02-20 09.00.00', 'HR'),
		(004, 'Amitabh', 'Singh', 500000, '14-02-20 09.00.00', 'Admin'),
		(005, 'Vivek', 'Bhati', 500000, '14-06-11 09.00.00', 'Admin'),
		(006, 'Vipul', 'Diwan', 200000, '14-06-11 09.00.00', 'Account'),
		(007, 'Satish', 'Kumar', 75000, '14-01-20 09.00.00', 'Account'),
		(008, 'Geetika', 'Chauhan', 90000, '14-04-11 09.00.00', 'Admin');
        
select * from worker;
select first_name, department, salary from worker
where department='admin' or salary>=100000;

select * from worker;
select worker_id,first_name, department, salary from worker

-- where worker_id=1 or worker_id=7;
where worker_id not in (1,6,7);

select * from worker
-- where salary between 110000 and 300000;
where salary not between 110000 and 300000;

select * from worker
where salary between 100000 and 500000
and department not in ('hr', 'admin');

select * from worker
where salary between 700000 and 1000000 or Department = 'HR';

select * from worker 
where salary not between 100000 and 3000000 and department  = 'admin';

select * from worker 
where salary not between 100000 and 3000000 or department  = 'account';

select * from worker
where first_name like 'Monika';

select * from worker
where first_name like '__i%';

select * from worker
where first_name like 'V%e_';

select * from worker
where first_name like '_i__%';

select * from worker
where first_name like '_i__a%';

select * from worker;
select min(salary) from worker where department='HR';
select count(worker_id) from worker where department='admin';
select sum(salary) from worker where department='admin';
select avg(salary) from worker where department='admin';


select * from worker 
where department = 'Admin'
and first_name not like 'a%'
and salary = (select min(salary) from worker where department = 'Admin');

select salary from worker 
union
select salary from worker;

select * from worker;
select worker_id as RollNumber from worker;
select distinct(department) from worker;

select worker_id, first_name,
case 
	when salary > 3000000 then 'Rich People'
    when salary >= 1000000 and salary <299999 then 'Middleman'
    else 'Poor'
end
as status
from worker;

select min(salary) from worker where department ='admin';
select max(salary) from worker where department ='admin';

create view minSalaryAdmin as select min(Salary) from worker;
create view maxSalaryAdmin as select max(Salary) from worker;

select * from minsalaryadmin;
select * from maxsalaryadmin;