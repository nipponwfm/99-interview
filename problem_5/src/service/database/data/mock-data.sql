DROP TABLE IF EXISTS users;

CREATE TABLE users(
  id integer primary key,
  full_name varchar(50),
  sex boolean,
  phone_number varchar(12),
  address varchar(100)
);

INSERT INTO users 
VALUES 
  (1,'Truong Quang Thanh Dong', 0, '0388151391', 'Hue');
