//Patterns
const pattern4 = (n) => {
  for (i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(i + " ");
    }
    console.log();
    // 1
    // 2 2
    // 3 3 3
    // 4 4 4 4
    // 5 5 5 5 5
  }
};
const pattern6 = (n) => {
  for (i = 0; i < n; i++) {
    for (let j = 1; j < n - i + 1; j++) {
      process.stdout.write(j + " ");
    }
    console.log();
    // 1 2 3 4 5
    // 1 2 3 4
    // 1 2 3
    // 1 2
    // 1
  }

  return;
};
const pattern7 = (n) => {
  for (i = 0; i < n; i++) {
    //space
    for (let j = 0; j < n - i - 1; j++) {
      process.stdout.write(" ");
    }

    for (let j = 0; j < 2 * i + 1; j++) {
      process.stdout.write("*");
    }

    for (let j = 0; j < n - i - 1; j++) {
      process.stdout.write(" ");
    }
    console.log();
    //     *
    //    ***
    //   *****
    //  *******
    // *********
  }

  return;
};
const pattern8 = (n) => {
  for (i = 0; i < n; i++) {
    //space
    for (let j = 0; j < i; j++) {
      process.stdout.write(" ");
    }

    for (let j = 0; j < 2 * n - (2 * i + 1); j++) {
      process.stdout.write("*");
    }

    for (let j = 0; j < i; j++) {
      process.stdout.write(" ");
    }
    console.log();
    // *********
    //  *******
    //   *****
    //    ***
    //     *
  }

  return;
};

pattern8(5);
