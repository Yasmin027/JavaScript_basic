// 日時に関する命令

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


