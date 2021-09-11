オブジェクト
値に（順番の番号ではなく）名前を付けて管理できる

{
  // const point = [100, 180];

  // const point = {x: 100, y: 180};

  const point = {
    x: 100, 
    y: 180};
}


const point = {
  
  名前（キー）
  ↓
  x: 100, ←値
プロパティー（メンバー）

  y: 180};
}

アクセスするときの
記法（2種類）

{
  const point = {
    x: 100, 
    y: 180,
  };
    console.log(point.x);     ←記法①
    console.log(point['y']);  ←記法➁
}

値の変更

{
  const point = {
    x: 100, 
    y: 180,
  };

  point.x = 150;
  // point['x'] = 150;

    console.log(point.x);     
    console.log(point['y']);  

    //プロパティーの追加
    point.z = 90;
    //プロパティーの削除
    delete point.y;
}


スプレッド構文

{
  const otherPreps = {
    r: 4,
    color: 'red',
  };

  const point = {
    x: 100, 
    y: 180,
    ...otherPreps,
  };
  console.log(point);


  分割代入、レスト構文
  （xとyを定数として扱う)

  const{x, r, ...others} = point;


  //100
  //4
  //{y: 180, color: "red"}
}


オブジェクトのプロパティーを列挙
（オブジェクトにはforEachが使えない）

{
  const point = {
    x: 100, 
    y: 180,
  };

  const keys = Object.keys(point);   //←Object.keys(point);でpointのすべてのキーを配列で取得できる
  keys. forEach(key => {              //←配列にはforaeachが使える
    console.log(`Key: $[key] Value: $(point[key])`);
  });
  //Key: x Value: 100
  //Key: y Value: 180


  複数の座標を管理したかった場合
  (配列とオブジェクトを自由に組み合わせられる)

  const points = [
    {x: 30, y: 20},
    {x: 10, y: 50},
    {x: 40, y: 60},
];
console.log(points[1].y);   ←アクセス法
//50
}


単純なデータ型の場合、 
// x = 1 とするとコンピュータ上のどこかに 1 という値が格納されて、そこに x という名前が付く。
// 次にy = x とすると x の値である 1 がどこか別のところにコピーされて、そこに y という名前が付く。
{
  let x = 1;
  let y = x;
  x = 5;
  console.log(x); //5
  console.log(y); //1 (xが1の時に代入されたから)


  複雑なデータ型は、 
//   x = [1, 2] とすると、どこかに [1, 2] という値が格納されて、そこに x という名前が付く。
//   次にy = x とすると、 x に割り当てられた値ではなくて、 
//   x の値がどこに格納されているかという情報だけが作られて、そこに y という名前が付く。
//   （複雑なデータ型はデータ量が大きくなることも多いので、
//   丸ごと値をコピーしてシステムに負荷をかけてしまわないため）

  let x = [1, 2];
  let y = x;
  x[0] = 5;
  console.log(x); //[5, 2]
  console.log(y); //[5, 2] ←y については x の値の場所を指し示しているだけなので、 y も [5, 2] になる
}

xのある場所ではなく、値をのもの[1, 2]をコピーしたいとき
スプレッド演算子を使用

let x = [1, 2];
let y = [...x];
x[0] = 5;
console.log(x);  //[5, 2]
console.log(y);  //[1, 2]
