{
  const posts = [
    {
      text: 'JavaScriptの勉強中...',
      likeCount: 0,
    },
    {
      text: 'プログラミング楽しい！',
      likeCount: 0,
    }
  ];

  function show(post) {                                         ←post【仮引数】を受け取ったらtextとlikeCoundプロパティーを表示
    console.log(`${post.text} - ${post.likeCount}いいね`);
  }

  show(posts[0]);   ←最初の投稿を【実引数】で呼び出し
}


関数をオブジェクトの中に入れる(メソッド)

{
  const posts = [
    {
      text: 'JavaScriptの勉強中…',
      likeCount: 0,
      // show: function () {         ←キーをshow,値を下の関数にする
      //   console.log(`${this.text} - ${this.likeCount}いいね`);   ←同じオブジェクト内のプロパティーにアクセス：thisを使う
      // },   ↓さらに簡略化
      show(){                    ←showメソッド
        console.log(`${this.text} - ${this.likeCount}いいね`);
      }
    },
    {
      text: 'プログラミング楽しい！',
      likeCount: 0,
      show() {
        console.log(`${this.text} - ${this.likeCount}いいね`);
      }
    }
  ];

  //show(posts[0]);
  posts[0].show();    ←showメソッドを呼び出し
}


クラスの概念

プロパティーやメソッドの???の箇所に異なる値を渡せば、text以外が同じオブジェクトを作れる
テンプレート：元になるプロパティーやメソッド
インスタンス：クラスから作られるオブジェクト

【テンプレート】
{
text: ???,
likeCount: 0,
show() {...},
}
    ↓ クラスを作る

class Post {                ←classの後は大文字が多い
  constructor() {          ←constructor()で初期化し、インスタンスのプロパティーをセット
    this.text = ???;        ←クラスから作られるインスタンスはthisで表現する
    this.LikeCount = 0;
  }
  show() {...},
}
      ↓

class Post {
  constructor(words) {     ←constructorに引数を渡してセット（引数は何でもよい）
    this.text = words;      ←後で呼び出して使うために値（引数の値）をインスタンスのプロパティーに保持する
    this.likeCount = 0;
  }
  show() {...},
}

new Post('Hello')  ←入れたい文字



上（25～48）のオブジェクトをクラスを使って表示させると
{
  class Post {
    constructor(words) {
      this.text: words;
      this.likeCount: 0;
    }

    show() {
      console.log(`${this.text} - ${this.likeCount}いいね`);
    }
  }

  const posts = [
    new Post('JavaScript勉強中'),     ←newとした値（JavaScript勉強中）はconstructorに渡される
    new Post('プログラミング楽しい！')
  ];

  posts[0], show();
  posts[1], show();
}
//JavaScript勉強中 - 0いいね
//プログラミング楽しい！ - 0いいね
