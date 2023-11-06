function sum_to_n_a(n: number): number {
  let sum = 0;
  for (let i = 1; i <= n; i++) sum += i;

  return sum;
}

function sum_to_n_b(n: number): number {
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
