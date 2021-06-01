const spinner = (times) => {
  const oneFullSpinBar = ["|", "/", "-", "\\", "|", "/", "-", "\\"];
  let timeCount = 0,
    seconds = 100;
  while (timeCount !== times) {
    for (let bar of oneFullSpinBar) {
      setTimeout(() => {
        process.stdout.write(`\r${bar}`);
      }, seconds);
      seconds += 200;
    }
    timeCount++;
  }
};

spinner(1);