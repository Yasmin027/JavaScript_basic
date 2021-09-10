'use strict';

function showAd (message = 'Ad') {   //仮引数   実引数が指定されていないときに表示される文字を指定→=''
  console.log('----------');
  console.log(`----${message}----`);
  console.log('----------');
}

// ↓ 代入することで変更したいときに便利

showAd('header Ad');     //実引数
console.log('yeah');
showAd();
console.log('Great!');
