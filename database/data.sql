USE prisons

CREATE TABLE admin_tbl (
Admin_Id int PRIMARY KEY NOT NULL ,
Admin_Name varchar(20) NOT NULL,
Admin_Password varchar(20) NOT NULL
)

INSERT INTO admin_tbl VALUES (001,'SueNimoh', 'Mwihaki001')

CREATE TABLE announce(
_to varchar(30) NOT NULL,
Id varchar (13) NOT NULL PRIMARY KEY,
_subject  varchar(20) NOT NULL,
_message varchar(200) NOT NULL
)

INSERT INTO announce VALUES ('administrator','8882', 'complain', 'sms')


CREATE TABLE capacity(
id int NOT NULL PRIMARY KEY,
number int NOT NULL
)

INSERT INTO capacity VALUES(1, 500),(2, 750),(3, 1000),(4, 1500)

SELECT * FROM capacity

CREATE TABLE court (
National_Id int NOT NULL PRIMARY KEY,
File_number varchar(14) NOT NULL,
Dateoftrail date NOT NULL,
Sentence varchar(50) NOT NULL,
Location_ varchar(20) NOT NULL
)

INSERT INTO court VALUES (23467821,'AS32','2020-11-14','2 years','Kamiti')

CREATE TABLE newprison(
pno int NOT NULL PRIMARY KEY,
pname varchar(30) NOT NULL,
location_ varchar(30) NOT NULL,
opendate varchar(30) NOT NULL,
contact int NOT NULL,
capacity int  NOT NULL
)



INSERT INTO newprison VALUES(7,'LAMU', 'LAMU', '2020-02-12', 796487125, 500),
(2334, 'LANGATA', 'NAIROBI', '2020-02-12', 719884142, 10)


CREATE TABLE officer (
National_id int NOT NULL PRIMARY KEY,
Telephone varchar(20) NOT NULL,
From_prison varchar(30) NOT NULL,
To_prison varchar(30) NOT NULL,
Dateoftransfer varchar(30) NOT NULL
)


INSERT INTO officer VALUES (
674484, '0712965134', 'LANGATA', 'SHIMOLATEWA', '2020-01-20'
)


CREATE TABLE officerdetails (
id int NOT NULL PRIMARY KEY,
firstname varchar (30) NOT NULL,
lastname varchar (30) NOT NULL,
address_ varchar (30) NOT NULL,
dateofbirth varchar(30) NOT NULL,
gender varchar(30) NOT NULL,
telephone varchar(30) NOT NULL,
education varchar(50) NOT NULL,
experience varchar(50) NOT NULL
)

INSERT INTO officerdetails VALUES (35689054,'Eric','Chesio','Rongai','1989-04-12','Male','0719443132','Diploma','3 years'),
(32389054,'Mary','Wakio','Langata','1979-11-01','Male','0723443110','Certificate','5 years')



CREATE TABLE policestation(
Station_id int NOT NULL PRIMARY KEY,
Station_Name varchar(50) NOT NULL,
Address_ varchar(100) NOT NULL,
City varchar(30) NOT NULL,
Email varchar(100) NOT NULL,
Mobile varchar(20) NOT NULL,
Username varchar(30) NOT NULL,
Password_ varchar(30) NOT NULL
)

INSERT INTO policestation VALUES (897, 'kimaya', 'kimaya', 'nairobi', 'policpol@police.com', 888766, 'police', 'police')

SELECT * FROM policestation


CREATE TABLE registration(
id int NOT NULL DEFAULT '0' PRIMARY KEY,
Fullname varchar (50) NOT NULL,
DOB date NOT NULL,
datein varchar(15) NOT NULL,
dateout varchar(15) NOT NULL,
Address_ varchar(30) NOT NULL,
County varchar(30) NOT NULL,
Gender varchar(30) NOT NULL,
Education varchar(100) NOT NULL,
MaritalStatus varchar(30) NOT NULL,
Offence varchar(200) NOT NULL,
Sentence varchar(30) NOT NULL,
File_num varchar(15) NOT NULL,
prison varchar(30) NOT NULL
)

INSERT INTO registration VALUES (6567, 'Thomas Owino Kamau', '1970/08/22', '01/24/2011', '10/12/2016', 'Kiserian', '02', '01', '01', '04', 'i m oan', '01', '09078766', 'LANGATA'),
(9786575, 'Owino Kamau', '1984/02/13', '01/24/2014', '10/12/2016', '', '', '01', '04', '01', 'kill people', '05', '88999777', 'LANGATA'),
(89758536, 'WENJO', '1985-03-16', '2003-03-16', '2003-03-16', 'Kabamzqre', 'Nairobi', 'Male', 'Never', 'Divorced', 'Killing', '2 years', 'NBI-06654', 'LANGATA')


CREATE TABLE transfers(
National_id int NOT NULL PRIMARY KEY,
File_num varchar(20) NOT NULL,
From_prison varchar(30) NOT NULL,
To_Prison varchar(30) NOT NULL,
Dateoftransfer date NOT NULL
)

INSERT INTO transfers VALUES (666544, 'NAS-34567', 'LANGATA', 'SHIMOLATEWA', '2010-10-10'),
(966544, 'LDV-32454', 'LANGATA', 'KODIAGA', '2010-10-10'),
(980977, 'NBI-89654', 'KODIAGA', 'KODIAGA', '2002-02-23')


CREATE TABLE users(
user_id int NOT NULL PRIMARY KEY,
FullName varchar(30) NOT NULL,
Address_ varchar(100) NOT NULL,
City varchar(30) NOT NULL,
Mobile varchar(20) NOT NULL,
Email varchar(100) NOT NULL,
Gender varchar(20) NOT NULL,
BirthDate date NOT NULL,
UserName varchar(30) NOT NULL,
Password_ varchar(30) NOT NULL,
Station_Name varchar(50) NOT NULL,
VerificationProof varchar(100) NOT NULL
)

INSERT INTO users VALUES (1, 'user', 'Ann', 'nairobi', 988887, 'Ann@ugmail.com', 'female', '1990-11-04', 'Ann043', 'user', 'user12', 'user')


CREATE TABLE visitor(
id int NOT NULL PRIMARY KEY,
fullname varchar (30) NOT NULL,
address_ varchar(30) NOT NULL,
dateofvisit varchar(30) NOT NULL,
timein varchar(30) NOT NULL,
timeout varchar(30) NOT NULL,
relationship varchar(30) NOT NULL,
telephone varchar(30) NOT NULL,
prisoner varchar(30) NOT NULL
)


INSERT INTO visitor VALUES (89999089, 'Emmillie', 'Rongai', '2021-02-12', '12:00am', '5:00pm', 'other', 2147483647, 'Qin Yun')

SELECT * FROM visitor


/*shows all tables*/
Select * FROM sys.tables




