const rl = require("readline");

let obj = {
  x : null,
  y : null
}

const readLine = rl.createInterface({
  input : process.stdin,
  output : process.stdout
});




await readLine.question("숫자를 입력해주세요.", (answer) => {
  console.log(answer);
})
