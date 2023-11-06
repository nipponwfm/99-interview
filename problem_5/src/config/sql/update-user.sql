UPDATE users
SET 
  full_name = $fullName,
  sex = $sex,
  phone_number = $phoneNumber,
  address = $address
WHERE id = $id
;
