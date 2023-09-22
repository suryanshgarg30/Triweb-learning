create database workshop2
CREATE TABLE teacher(
id int(11) not null PRIMARY KEY AUTO_INCREMENT,
    teacher_name varchar(255) NOT null,
    mobile_number varchar(100) not null, 
    salary int(30) 
);
CREATE TABLE teachers(
id int not null PRIMARY KEY AUTO_INCREMENT,
    teacher_name varchar(255) NOT null,
    mobile_number varchar(100) not null, 
    salary int
);
CREATE TABLE classes(
id int not null AUTO_INCREMENT,
    class_name varchar(100) not null, 
    teacher_id int not null, 
    PRIMARY KEY(id), 
    FOREIGN KEY (teacher_id) REFERENCES teachers(id)
)
insert into teachers(teacher_name, mobile_number, salary)values 
('suryansh', '1234', 10000) 
insert into teachers values (4,'faiz', '1238', 5000), (5,'ajey', '1237', 4000) 
("Class 7 " , 5),
update classes set class_name = 'Class 4' where id = 1  
insert into students( student_name, mobile, class_id) values('max' , '9876' , 5) , ('lowise' , '9875' , 5) , ('arya' , '9874' , 5) , ('adi' , '8888' , 6) , 
('bata' , '8887' , 6) , ('arjun' , '7777' , 7) , ('rishab' , '6666' , 1) , ('Peter' , '5555' , 2) , ('mahesh' , '4444' , 2) , ('Sayed' , '3333' ,3) , ('suryansh' , '2222' , 3) 
id int  NOT null PRIMARY KEY auto_increment,
student_name varchar(255) NOT null,
class_id  int not null, 
mobile varchar(100),
FOREIGN KEY (class_id) REFERENCES classes(id) 
);

select * from students where class_id <> 6 

select * from students where class_id <> 6 order by class_id desc
select * from students where class_id <> 6 order by class_id desc

select * from students where class_id = 5 limit 2 
select  min(salary) from teachers

select  sum(salary)  as totalSalary from teachers

select  * from students where student_name like'R%n' 

select max(salary) from teachers where salary not in (select max(salary) from teachers) 

select * from teachers where salary between 5000 and 11000 \

 select cl.class_name, tr.teacher_name as class_teacher
 from classes cl
 left join teachers tr on cl.teacher_id = tr.id 


 select class_id, count(*) as number_od_students from students
group by class_id
order by number_od_students desc

select class_id, count(*) as number_od_students from students
group by class_id
having number_od_students > 2