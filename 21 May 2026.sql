show databases;
use vitcampus;
show tables from vitcampus;

-- WHERE Class (used only for direct conditions)
-- Order by, Group by, Having Clause, Limit Clause

-- Order By 

select * from worker;

select first_name, department, salary from worker
-- where department ='admin' order by salary asc;
where department ='admin' order by salary desc;

-- Group By

select count(worker_id) from worker where department='admin' or department = 'hr';

select department, count(department) from worker
group by department order by department asc;

-- salary department wise consolidated full salary

select department, sum(salary) from worker
group by department;

-- Having Clause (where keyword cannot be used with aggregate functions)

-- SELECT column_name(s)
-- FROM table_name
-- WHERE condition
-- GROUP BY column_nome(s)
-- HAVING condition
-- ORDER BY column_nome(s);
select department, count(department) from worker
group by department having count(department)>=3 order by department asc;

select department, sum(salary) from worker
group by department having sum(salary)<=300000 order by department asc;

-- limit offset

select * from worker limit 2 offset 3;

-- Sub query
CREATE TABLE toppers(id INT);
INSERT INTO toppers VALUES (2), (3);

select * from toppers; 
select worker_id, first_name, department from worker
where worker_id in (2,5);

-- Question 1
select department,sum(salary) from worker
group by department order by sum(salary) asc limit 2;

-- Question 2 
select first_name, department, salary from worker
where department = 'admin' order by salary desc limit 1 offset 1;

-- Question 3
select first_name, department, salary
from worker w1
where salary = (
    select distinct salary
    from worker w2
    where w1.department = w2.department
    order by salary desc
    limit 1 offset 1
);