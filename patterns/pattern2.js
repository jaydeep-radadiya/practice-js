function pattern2(n) {
  for (let row = 1; row <= n; row++) {
    let s = "";
    for (let col = 1; col <= row; col++) {
      s += "*";
    }
    console.log(s);
  }
}

let n = 5;
pattern2(n);

// *
// **
// ***
// ****
// *****
