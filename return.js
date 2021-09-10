'use strict';

function sum(a, b, c) {
  // console.log(a + b + c);
  return a + b + c;
}

// sum(1, 2, 3);
// sum(3, 4, 5);

const total = sum(1, 2, 3) + sum(3, 4, 5);
console.log(total);



// 関数式
// const 定数名 = funcrion(仮引数,仮引数...) {
//   処理;
//   処理;
//   return 返り値;
// };    ←；いる！

// 呼び出し
// 定数名(実引数, 実引数...);


const sum = function(a,b,c) {
  return a + b + c;
};

const total = sum(1, 2, 3) + sum(3, 4 ,5);
console.log(total);


// アロー関数
const sum = (a, b, c) => a + b + c;

const total = sum(1, 2, 3) + sum(3, 4 ,5);
console.log(total);



// 引数が一つの場合()を省略できる

const double = function (a) {
  return a * 2;
};

        // ↓

const double = a => a * 2;
console.log(double(12));

