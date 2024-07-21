function pattern7(n) {
  for (let row = 1; row <= n; row++) {
    let s = "";
    for (let col = 1; col <= n; col++) {
      if (
        (col > row && row + col < n + 1) ||
        (col < row && row + col > n + 1)
      ) {
        s += " ";
      } else {
        s += "*";
      }
    }
    console.log(s);
  }
}

// n will be always odd
let n = 7;
pattern7(n);

// *     *
// **   **
// *** ***
// *******
// *** ***
// **   **
// *     *
