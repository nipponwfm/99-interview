SELECT
  id as id,
  full_name as fullName,
  sex as sex,
  phone_number as phoneNumber,
  address as address
FROM users AS u
WHERE u.id = $id
;
