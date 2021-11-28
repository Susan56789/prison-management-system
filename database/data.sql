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

CREATE TABLE court (
National_Id int NOT NULL PRIMARY KEY,
File_number varchar(14) NOT NULL,
Dateoftrail date NOT NULL,
Sentence varchar(50) NOT NULL,
Location_ varchar(20) NOT NULL
)

