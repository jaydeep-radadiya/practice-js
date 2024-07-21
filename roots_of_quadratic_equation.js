function solve(a, b, c) {
  // ax^2 + bx + c = 0
  let sqrtVal = Math.sqrt(b * b - 4 * a * c);
  let root1 = (-b - sqrtVal) / (2 * a);
  let root2 = (-b + sqrtVal) / (2 * a);
  console.log(root1, root2);
}

solve(2, 5, 3);
