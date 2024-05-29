const rl = require("readline");

async function ReadLine(...callbacks){
  let x = null;
  let y = null;

  const readLine = rl.createInterface({
    input : process.stdin,
    output : process.stdout
  });

  //* Promise 문, 그냥 자세히 보지 말것
  //* 숫자 입력 방법은 ex) 4 3, 5 3 스페이스바로 구분하자.
  await new Promise((res,rej) => {
    readLine.question("숫자를 두개를 스페이스바로 분리하여 입력", (answer) => {
      const split = answer.split(" ");
      //* 길이가 2
      if(split.length === 2){
        //* 두개가 숫자면 통과
        if(Number(split[0]) && Number(split[1])){
          x = Number(split[0]);
          y = Number(split[1]);
          res();
        }
        //* 둘중 하나라도 숫자가 아니면 해당 조건문을 통과한다.
        else{
          rej();
        }
      }

      //* 길이가 맞지않는다.
      else{
        rej();
      }
    })
  })
  
  readLine.close();

  for(const callback of callbacks){
    callback(x,y);
  }
}

module.exports = ReadLine;