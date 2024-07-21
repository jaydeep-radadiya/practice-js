function pattern4(n) {
  for (let row = 1; row <= n; row++) {
    let s = "";
    for (let col = 1; col <= 2 * n - 1; col++) {
      if (col <= n - row || col >= n + row) {
        s += " ";
      } else {
        s += "*";
      }
    }
    console.log(s);
  }
}

let n = 7;
pattern4(n);

//       *
//      ***
//     *****
//    *******
//   *********
//  ***********
// *************
