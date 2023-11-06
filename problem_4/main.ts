function sum_to_n_a(n: number): number {
  let sum = 0;
  for (let i = 1; i <= n; i++) sum += i;

  return sum;
}

function sum_to_n_b(n: number): number {
  // https://accgroup.vn/cong-thuc-tinh-tong-day-so-cach-deu#:~:text=C%C3%B4ng%20th%E1%BB%A9c%20t%C3%ADnh%20t%E1%BB%95ng%20d%C3%A3y%20s%E1%BB%91%20c%C3%A1ch%20%C4%91%E1%BB%81u%20l%C3%A0%20S,s%E1%BB%91%20cu%E1%BB%91i%20c%C3%B9ng%20c%E1%BB%A7a%20d%C3%A3y.
  return (n * (1 + n)) / 2;
}

function sum_to_n_c(n: number): number {
  function recursion(value = 0, index = 1) {
    if (index > n) return value;
    else return recursion(value + index, index + 1);
  }

  return recursion();
}

let test = 100;
console.log(sum_to_n_a(test));
console.log(sum_to_n_b(test));
console.log(sum_to_n_c(test));
