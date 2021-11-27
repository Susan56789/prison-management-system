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

INSERT INTO 