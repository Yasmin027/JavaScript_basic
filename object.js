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
