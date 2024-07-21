// length of sides are given, can we form triangle
// rule: sum of two sides of a triangle > third side

let a = 10,
  b = 12,
  c = 5;

if (a + b > c && b + c > a && a + c > b) {
  console.log("valid triangle");
} else {
  console.log("invalid triangle");
}
