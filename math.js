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


ランダムな整数を作成

0, ...n
Math.floor(Math.random() * (n+1))

min, ..., max
Math.floor(Math.random() * (max + 1 - min)) + min

eg. 0，1，2の整数のうち一つをランダムに出す

Math.random()   ←0以上1未満

Math.random() * 3   ←0以上3未満

Math.floor(amath.random() * 3)   ←0以上3未満の整数


サイコロ（1から6までをランダムに出す）

console.log(Math.floor(Math.random() * 6) + 1);  //←６は6+1-1
