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


【クラスの概念】

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

 
  
  
【カプセル化】
プロパティーを直接操作せず、メソッドを介して操作する（機能の拡張が簡単になるため）

{
  class Post {
    constructor(words) {
      this.text = words;
      this.likeCount = 0;
    }

    show() {
      console.log(`${this.text} - ${this.likeCount} likes`);
    }

    like() {                ←likeメソッドを追加してlikeCountを増やす
      this.likeCount++;
    }
  }

  const posts = [
    new Post('JavaScript勉強中'),     
    new Post('プログラミング楽しい！')
  ];

  posts[0]. like();    ←likeCountを増やす
  posts[0]. show();
  posts[1]. show();
}
//JavaScript勉強中 - 1 likes
//プログラミング楽しい！ - 0 likes

  
  
【静的メソッド】static
インスタンスを介さずに直接クラスから呼び出す方法
：個々のオブジェクトであるインスタンスには関係ないが、投稿に関する機能を作りたいときなど

{
  class Post {
    constructor(words) {
      this.text = words;
      this.likeCount = 0;
    }

    show() {
      console.log(`${this.text} - ${this.likeCount} likes`);
    }

    like() {                
      this.likeCount++;
    }

    //静的メソッド
    //thisは使えない
    static showInfo() {
      console.log('Post class version 1.0');
    }
  }

  const posts = [
    new Post('JavaScript勉強中'),     
    new Post('プログラミング楽しい！')
  ];

  Post.showInfo();    ←クラス名.メソッド名;
}
//Post class version 1.0

  
【クラスの継承】

{
  class Post {  //親クラス
    constructor(words) {
      this.text = words;
      this.likeCount = 0;
    }

    show() {
      console.log(`${this.text} - ${this.likeCount} likes`);
    }

    like() {                
      this.likeCount++;
      this.show();
    }
  }

  //追加のクラス
  class SponsoredPost extends Post{   //子クラス ←Postクラスに書かれたコードがそのまま引き継がれる
    constructor(words, sponsor) {
      super(text);                  ←子クラスのconstructor()でthisキーワードを使うには最初にsuper()と書く
      this.sponsor = sponsor;
    }

    show() {
      super().show();                   ←親クラスのshow()メソッドを呼び出す
      console.log(`...sponcsored by ${this.sponsor}`);
    }
    }

  const posts = [
    new Post('JavaScript勉強中'),     
    new Post('プログラミング楽しい！'),
    new SponsoredPost('3分動画でマスターしよう', 'dotinstall')
  ];

  posts[2].show(); 
  posts[2].like();
}
