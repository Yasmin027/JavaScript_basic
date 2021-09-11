// 文字列の文字数の取得

{const str = 'hello';

console.log(str.length);  //5

//部分文字列の取得
//str.substring(開始位置、終了位置);
console.log(str.substring(2, 4));  //ll

// 個々の文字を取得
console.log(str[1]); //e
// ＊配列のように値を指定したりforEachを使うことはできない
}


配列の要素を文字列として結合させる
（join）
{
  const d = [2019, 11, 14];

  console.log(d.join('/')); //2019/11/13
  console.log(d.join(''));  //20191113


文字列を区切り文字のところで分割し、それを配列にする
（split）

const t = '17:08:24';
console.log(t.split(':'));  //["17", "08", "24"]


分割代入で返り値を別々の定数に代入

const t = '17:08:24';

const [hour, minute, second] = t.split(':');
console.log(hour);
console.log(minute);
console.log(second);  
// 17
// 08
// 24
}
