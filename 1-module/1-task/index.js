function factorial(n) {
  let x = 1;
  while (n > 1) {
    x = x * n;
    n--;
  }
  return x;
}
