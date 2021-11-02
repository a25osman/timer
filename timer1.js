console.clear();
let arg = process.argv.slice(2);

for(let val of arg) {
  setTimeout(() => {
    if (Number(val) && val >= 0) {
      process.stdout.write('\x07');
      console.log(val + " seconds");
    }
  }, val * 1000);
}
