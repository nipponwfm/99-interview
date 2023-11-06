SELECT
  id as id,
  full_name as fullName,
  sex as sex,
  phone_number as phoneNumber,
  address as address
FROM users AS u
WHERE
  id = $id OR $id IS NULL
  AND ( fullName = $fullName OR $fullName IS NULL)
  AND ( sex = $sex OR $sex IS NULL )
  AND ( phoneNumber = $phoneNumber OR $phoneNumber IS NULL )
  AND ( address = $address OR $address IS NULL )

  -- $id IS NULL OR id = $id
  -- AND ( $fullName IS NULL OR fullName = $fullName)
  -- AND ( $sex IS NULL OR sex = $sex )
  -- AND ( $phoneNumber IS NULL OR phoneNumber = $phoneNumber )
  -- AND ( $address IS NULL OR address = $address )
;
