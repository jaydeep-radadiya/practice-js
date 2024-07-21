// An equilateral triangle has 3 equal sides.
// An isosceles triangle has 2 equal sides.
// A scalene triangle has 3 different sides.

let a = 7,
  b = 8,
  c = 9;

if (a == b && b == c) {
  console.log("equilateral");
} else if (a == b || b == c || a == c) {
  console.log("isosceles");
} else {
  console.log("scalene");
}
