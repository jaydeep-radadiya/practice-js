function pattern3(n) {
  for (let row = 1; row <= n; row++) {
    let s = "";
    for (let col = 1; col <= n; col++) {
      if (row + col >= n + 1) {
        s += "*";
      } else {
        s += " ";
      }
    }
    console.log(s);
  }
}

let n = 5;
pattern3(n);

//     *
//    **
//   ***
//  ****
// *****
