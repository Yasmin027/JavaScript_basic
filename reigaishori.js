文字列を大文字にするtoUpperCase()

{
  const name = 'taguchi';

  console.log(name.toUpperCase());
}

例外（開発者が想定していなかった理由で起きるエラー）を処理をして
その後の処理を止めずに実行させる方法[例外処理]  try...catch()

{
  const name = 5;

  console.log(name.toUpperCase());  ←文字列以外のものを大文字にはできないのでエラーが出てその後のfinishが実行されない


  console.log('Finish!');

}

              ↓

  {
    const name = 5;

    try {                                   ←エラーが起きそうな個所をtryで囲み
      console.log(name.toUpperCase());         
    } catch (e) {                               catch()←引数（中は何でもいい）で続けて例外が起きた時の処理を書く
      console.log(e);                              引数を渡すことで例外に関する情報をその名前で扱えるようにできる
    }

    console.log('Finish!');
  }
  //Finish!が実行される
