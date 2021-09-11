{
  const scores =[10, 3, 9];

  let sum = 0;                 //←sumという変数を用意(0で初期化)

  scores.forEach(score => {     //←scores のそれぞれの要素を score として次の処理をしなさい
    sum += score;                 A += B  ←A = A + B
  });

  const avg = sum / scores.length;

  console.log(sum);  //22
  console.log(avg);  //7.3333333333333333

  //小数点以下がある数値の操作
  console.log(Math.floor(avg)); //7 小数点以下を切り捨て
  console.log(Math.ceil(avg)); //8 小数点以下を切り上げ
  console.log(Math.round(avg)); //7 四捨五入
  console.log(Math.toFixed(3)); //7.333 指定した桁数にする

  console.log(Math.randam()); //乱数を生成（0以上1未満のランダムな数値を生成）
}
