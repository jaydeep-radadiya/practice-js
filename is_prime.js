function isPrime(x) {
  for (let i = 2; i <= x - 1; i++) {
    if (x % i == 0) {
      return false;
    }
  }
  return true;
}

let x = 230;
if (isPrime(x)) {
  console.log(x, "is prime number");
} else {
  console.log(x, "is not prime number");
}
