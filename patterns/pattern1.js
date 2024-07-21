function pattern1(n) {
  for (let row = 1; row <= n; row++) {
    let s = "";
    for (let col = 1; col <= n; col++) {
      s += "*";
    }
    console.log(s);
  }
}

let n = 3;
pattern1(n);

// ***
// ***
// ***
