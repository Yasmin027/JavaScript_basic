'use strict';

配列 
データをまとめて同じ名前で扱う

{
  // const score = 80;
  // const score = 90;
  // const score = 40;

  const scores = [80, 90, 40];
  console.log(scores);
}


{
  const scores = [80, 90, 40];
  console.log(scores[1]);     //←90

  scores[2] = 44;        //←40を44に変えたい時


  // scores = 10;           ←const(定数)を使って配列全体の変更はできないが、上のように一部の変更は可能

  console.log(scores.length);  //←3（scoresに入っている要素の数)
}



ループ処理を使って配列すべてに対してない甍の処理を行う方法

'use strict';

{
  const scores = [80, 90, 40];
 
  // console.log(`Score: ${scores[0]}`);
  // console.log(`Score: ${scores[1]}`);
  // console.log(`Score: ${scores[2]}`);

  for (let i =0; i < scores.length; i++) {
    console.log(`Score: ${scores[i]}`);      //←Score: 80 Score: 90 Score: 40
  }

  for (let i =0; i < scores.length; i++) {
    console.log(`Score $(i): ${scores[i]}`);    //←Score 0: 80 Score 1: 90 Score 2: 40
  }
}



配列の操作（先頭・末尾）


// 先頭に要素を追加： unshift()
// 末尾に要素を追加： push()
// 先頭から要素を削除： shift()
// 末尾から要素を削除： pop()


const scores = [80, 90, 40, 70];
scores.push(60, 50);
scores.shift()           //←削除は一つずつしかできないので、()に要素を書く必要なし
//90, 40, 70, 60, 50

for (let i = 0; i < scores.length; i++) {
  console.log(`Score $(i): ${scores[i]}`);
}


//途中の要素を削除、追加： splice(変化が開始する位置, 削除数, 追加する要素);

const scores = [80, 90, 40, 70];

scores.splice(1 ,2);
//80, 70

scores.splice(1, 0, 60, 50);
//80, 60, 50, 90, 40, 70

scores.splice(1, 1, 40, 50);
//80, 40, 50, 40, 70

for (let i = 0; i < scores.length; i++) {
  console.log(`Score $(i): ${scores[i]}`);
}


スプレット構文

{
const otherScores = [10, 20];
const scores = [80, 90, 40, 70, ...otherScores];    //←...で上の配列の要素を同じ場所に展開
// console.log(scores);
//80, 90, 40, 70, 10, 20


function sum(a, b) {
  console.log(a + b);
}

sum(...otherScores);
//sum(10, 20),
}


forEach()
配列のような「要素に順序を持つオブジェクト」が持つメソッドで、「その要素1つ1つに対して順番にある処理をしたい」時に使う

{
const scores = [80, 90, 40, 70]; 

scores.forEach((score,index) => {            //←個々のscoreの要素が順番に入ってきて要素がなくなるまで処理をする
  console.log(`Score $(index): $(score)`);        index(2つ目の引数)を入れると、scoreがscoreの中で何番目かという情報を受け取れる
});
}

// Score 0: 80
// Score 0: 90
// Score 0: 40
// Score 0: 70
