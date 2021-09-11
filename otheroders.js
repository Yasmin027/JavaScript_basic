日時に関する命令

// d.getFullYear();      2021
// d.getMonth();         0-11(Jan, Feb,...)
// d.getDate();          1-31
// d.getDay();           0-6(Sun, Mon,...)
// d.getHours();         0-23
// d.getMinutes();       0-59
// d.getSeconds();       0-59
// d.getMilliseconds();  0-999 1ms = 1/1000 sec

// （世界の）どこのタイムゾーンで取得しても同じになる値
// getTime()
// UTC 1970/01/01 00:00:00 からの経過ミリ秒


{
  const d = new Date();
  
  console.log(`${d.getMonth() +1} 月 ${d.getDate()} 日`);
}
//〇月〇日 （実行時の日付）



特定の日時を表す値を作成
// （引数に年月日などを渡す）
{
  const d = new Date(2019, 10);  //2019/11/01 00:00
  d.setHours(10, 20, 30);        //2019/11/01 10:20:30
  d.setDate(31);                 //2019/12/01 10:20:30
  d.setDate(d.getDate() + 3);    //2019/12/04 10:20:30  (今のdの日付の3日後)
  console.log(d);
}



警告を表示

  alert('hello');

確認を表示

  const answer = confirm('削除しますか？');
  if (answer) {                             //←アンサーをコンソールに返して表示させる
    console.log('削除しました');
  } else {
    console.log('キャンセルしました');
  }
