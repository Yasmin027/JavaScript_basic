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
