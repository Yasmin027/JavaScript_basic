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
