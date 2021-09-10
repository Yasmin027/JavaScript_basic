'use strict';

// let hp = 100;

// while (hp > 0) {
//   console.log(`${hp} HP left`);
//   hp -= 15;
// }



// HPが初めから-50の場合も残りHPを表示したいとき↓
let hp = -50;

do {
  console.log(`${hp} HP left`);
  hp -= 15;
}  while (hp > 0) ;
