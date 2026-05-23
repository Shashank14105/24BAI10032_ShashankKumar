show databases;
use vitcampus;
drop table departments;
-- Create Departments Table
CREATE TABLE Departments (
dept_id INT PRIMARY KEY,
dept_name VARCHAR(50) NOT NULL,
location VARCHAR(50)
);
INSERT INTO Departments (dept_id, dept_name, location) VALUES
(10, 'Finance', 'New York'),
(20, 'IT', 'San Francisco'),
(30, 'Sales', 'Chicago'),
(40, 'Marketing', 'Los Angeles');
-- Create Jobs Table
CREATE TABLE Jobs (
job_id INT PRIMARY KEY,
job_title VARCHAR(50),
min_salary DECIMAL(10,2),
max_salary DECIMAL(10,2)
);
INSERT INTO Jobs (job_id, job_title, min_salary, max_salary) VALUES
(1, 'Manager', 80000.00, 150000.00),
(2, 'Developer', 60000.00, 110000.00),
(3, 'Analyst', 50000.00, 90000.00),
(4, 'Intern', 30000.00, 45000.00);
-- Create Employees Table
CREATE TABLE Employees (
emp_id INT PRIMARY KEY,
name VARCHAR(50) NOT NULL,
manager_id INT,
dept_id INT,
job_id INT,
salary DECIMAL(10,2),
hire_date DATE,
FOREIGN KEY (dept_id) REFERENCES Departments(dept_id),
FOREIGN KEY (job_id) REFERENCES Jobs(job_id)
);
INSERT INTO Employees (emp_id, name, manager_id, dept_id, job_id, salary, hire_date) VALUES
-- Top Level Manager
(501, 'Alice', NULL, 10, 1, 120000.00, '2015-01-01'),
-- IT Dept Staff
(503, 'Charlie', 501, 20, 1, 95000.00, '2016-05-20'),
(504, 'David', 503, 20, 2, 85000.00, '2019-11-01'),
(505, 'Eve', 503, 20, 2, 78000.00, '2020-02-15'),
-- Finance Dept Staff
(502, 'Bob', 501, 10, 3, 55000.00, '2018-03-12'),
-- Sales Dept Staff
(506, 'Frank', 501, 30, 3, 52000.00, '2021-06-21'),
-- Marketing (unassigned to manager for complexity)
(507, 'Grace', NULL, 40, 2, 72000.00, '2022-08-10');


-- Questions:

-- 1. [JOINS] List the name of each employee along with their job title and department name.
select employees.name, jobs.job_title, departments.dept_name
from employees, jobs, departments
where employees.job_id = jobs.job_id 
and employees.dept_id = departments.dept_id;

-- 2. [SUBQUERY] Find all employees whose salary is higher than the average salary of the 'IT' department.
select name, salary from employees 
where salary > (select avg(salary) from employees
where dept_id = (select dept_id from departments where dept_name='IT')
);
-- 3.
-- [GROUP BY] Calculate the total salary expenditure for each department name (not ID).
select d.dept_name, sum(e.salary) as total_salary_expenditure from departments d 
left join employees e on d.dept_id = e.dept_id
group by d.dept_name;

-- 4.
-- [HAVING] Display departments that have more than 2 employees and an average salary above 70,000.
select dept_name, count(emp_id), avg(salary) from departments, employees
where departments.dept_id = employees.dept_id
group by dept_name having count(emp_id) > 2 and avg(salary) > 70000;

-- 5.[SELF JOIN] Retrieve a list of employee names and their respective manager's names.
select e.name, m.name from employees e, employees m
where e.manager_id = m.emp_id;

-- 6.[ORDER BY] Find the top 3 highest-paid employees and list them in descending order.
select name, salary from employees
order by salary desc limit 3;

-- 7.[JOINS + WHERE] Find all Developers working in the 'San Francisco' location.
select employees.name, jobs.job_title, departments.location
from employees, jobs, departments where employees.job_id = jobs.job_id 
and employees.dept_id = departments.dept_id and jobs.job_title = 'Developer' and departments.location = 'San Francisco';

-- 8.[GROUP BY] Find the number of employees hired each year.
select year(hire_date), count(*) from employees
group by year(hire_date);

-- 9.[HAVING] List job titles where the maximum salary of an employee in that role is less than 100,000.
select jobs.job_title, max(employees.salary) from jobs, employees
where jobs.job_id = employees.job_id
group by jobs.job_title having max(employees.salary) < 100000;

-- 10.[SUBQUERY] Find the names of employees who work in the same department as 'David'.
select name from employees
where dept_id = (
    select dept_id from employees 
    where name = 'David'
);

-- 11.[MULTI-TABLE JOIN] Show all department names even if they have no employees assigned to them.


-- 12.[COMPLEX FILTER] Find employees who were hired between 2018 and 2020 and earn more than 60,000.
select name, hire_date, salary from employees
where year(hire_date) >= 2018 and year(hire_date) <= 2020 and salary > 60000;

-- 13.[CORRELATED SUBQUERY] Find employees who earn more than the average salary of their own department.
select e1.name, e1.salary, e1.dept_id from employees e1
where e1.salary > (
    select avg(e2.salary) from employees e2
    where e2.dept_id = e1.dept_id
);

-- 14.[JOINS] Find the job title and salary of the employee with ID 504.
select jobs.job_title, employees.salary from employees, jobs
where employees.emp_id = 504 and employees.job_id = jobs.job_id;

-- 15.[GROUP BY] For each manager (by ID), find the minimum salary of the people reporting to them.
select manager_id, min(salary) from employees
where manager_id is not null 
group by manager_id;

-- 16.[SUBQUERY] List departments that do not have any 'Analysts'.
select dept_name from departments
where dept_id not in (
    select dept_id from employees, jobs
    where employees.job_id = jobs.job_id and jobs.job_title = 'Analyst'
);


-- 17.[AGGREGATION] Find the difference between the highest and lowest salary in the company.
18.
-- [JOIN + ORDER BY] Display employee names and hire dates, sorted by department name (A-Z) and then by salary (High to Low).
19.
-- [HAVING] Identify managers (by ID) who manage more than 2 people.
20.
-- [SUBQUERY] Find the employee(s) with the third-highest salary.
21.
-- [LEFT JOIN] List all job titles and the number of employees currently holding that job.
22.
-- [JOIN + LIKE] Find employees in the 'Finance' department whose names contain the letter 'i'.
23.
-- [MATH + GROUP BY] Calculate the 10% bonus amount for each employee and show the total bonus per department.
24.
-- [SUBQUERY] List the name of the department that pays the highest total salary.
25.
-- [JOINS] Find all employees who report to 'Charlie'.