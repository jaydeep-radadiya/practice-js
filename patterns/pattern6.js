function pattern6(n) {
  for (let row = 1; row <= 2 * n - 1; row++) {
    let k = row >= n ? 2 * n - row : row;
    let s = "";

    for (let col = 1; col <= n - k; col++) {
      s += " ";
    }
    for (let col = 1; col <= 2 * k - 1; col++) {
      s += "*";
    }
    console.log(s);
  }
}

// n will be always odd
let n = 3;
pattern6(n);

//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
