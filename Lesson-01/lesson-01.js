console.log("JSファイル読み込んでる。");

// 変数宣言
let today;

//変数代入
today = '2022/01/29';

// 変数出力
console.log(today);

// 変数は以下の三種類ある。
const teisuu = "定数。再代入できない";
var grobal = "グローバル変数のようにスコープが広い。再宣言もできる。";
let local = "普通の変数、ローカル変数みたいな感じ。";

// JSはUnicode（文字コードの業界規格）の文字列が扱えるので、ひらがなや、一部の漢字を使用できるらしい。
// でも全角の文字列が混合するのは良くない
let あ = "AAA";
console.log(あ);

// JSのデータ型はプリミティブ型とオブジェクト型の2つに大別できる
// プリミティブ型：数値や文字列、真偽値、シンボル、null/undefined
// オブジェクト型：配列や連想配列、関数など

// JSの変数名は、キャメル記法が一般的らしい。
let userName = "キャメルで表す。";

// 変数の巻き上げ。varは、下記のように出力より後に書いてもエラーにならない。
// let, constだとReferenctエラーになる。
console.log(name);
var name = "変数宣言だけコンソールログの前に移動する。代入した値は表示されない。";

// Chapter3の練習問題
// プロフィールの要素である「名前（性・名）」「生年月日」「職業」を適切なキーワードを使って変数宣言しましょう。
// 例文は全てvarで宣言してますが、letもしくはconstに変更してください。
// var firstName = '太郎';
// var lastName = '山田';
// var dateOfBirth = '1983年10月22日';
// var myJob = 'エンジニア';

let firstName = '太郎let';
let lastName = '山田let';
const dateOfBirth = '1083年10月22日const';
const myJob = 'エンジニアconst';

console.log(firstName);
console.log(lastName);
console.log(dateOfBirth);
console.log(myJob);

// Webブラウザーの「Windows」オブジェクトには、入力ダイアログを表示する「prompt」、
// 警告ダイアログを表示する「alert」、確認ダイアログを表示する「confirm」の3つがある。
// JSには、ECMAScriptで規定されている標準仕様のビルトインオブジェクト、Webブラウザーが備えているオブジェクト、
// DOMオブジェクトなどがあり、promptは、Webブラウザーが提供するWindowsオブジェクトのメソッド。
// 「Windows.prompt」と記述するが、「Windows.」は省略できる。

// 身長と体重を入力してBEMを計算するプログラム。コメントアウトしてます。
// let weight;
// weight = prompt("体重は何キロですか？");

// let height;
// height = prompt("身長は何センチですか？") / 100;

// // BMIの計算
// let bmi = weight / (height * height);

// if (bmi < 18.5) {
//     alert("あなたは痩せすぎだよ。結果は：" + bmi);
// } else if (bmi >= 25) {
//     alert("あなたは太り過ぎだ、痩せなさい。結果は：" + bmi);
// } else {
//     alert("正常。結果は：" + bmi);
// }

// switch文を使用した曜日判定プログラム
let dt = new Date();//現在の日時を取得
let day = dt.getDay();//曜日を0~6の整数で取得している
switch(day) {
    case 0:
        document.write("本日は「日曜日」です。");
        break;
    case 6:
        document.write("本日は「土曜日」です");
        break;
    default:
        document.write("本日は「平日：です");
}

// Chapter5の練習問題
// カウント用の変数「i」に「1」を代入して、変数「i」が「10」を超えるまで処理を繰り返すコードを書いてください。
// 続けて、コンソールの画面に「偶数だけ」表示されるコードを追加してプログラムを完成させてください。
let i = 1;
while (i <=10) {
    if (i % 2 == 0){
        console.log(i);
    }
    i++;
}


// JavaScriptの組み込みオブジェクト
// 元々用意されているオブジェクトのことで、
// 配列の操作をするArrayや日付操作をするDateなどがある。
// Javaでの標準ライブラリみたいなもの
// JSの組み込みオブジェクト一覧
// ・Array：配列の操作
// ・ArrayBuffer：バッファの生成
// ・Boolean：真偽値の操作
// ・DataView：ArrayBufferのデータ読み書き操作
// ・Date：日付と時刻の操作
// ・Error：エラーの管理
// ・Function：関数の操作
// ・Generator：ジェネレータ関数の操作
// ・GeneratorFunction：ジェネレータ関数の生成
// ・Map：キーと値の組み合わせを保持して管理
// ・Number：数値の操作
// ・Object：すべてのオブジェクトの雛形
// ・RegExp：正規表現の機能
// ・Promise：処理の遅延および非同期処理の管理
// ・Proxy：オブジェクトの操作をカスタマイズする機能
// ・Set：重複しない一意の値の集合を管理
// ・String：文字列の操作
// ・Symbol：シンボルの操作
// ・WeakMap：参照が弱いキーと値の組み合わせを保持して管理
// ・WeakSer：参照が弱い一意の値の集合を管理
// ・Global：常時存在していてどこからでもアクセスできる
// ・JSON：JSON(JavaScript Object Notation)を操作する
// ・Math：三角関数や平方根、乱数などの数値計算ができる
// ・Reflect：インターセプト可能な操作で利用できる

// Dateオブジェクトでの日付や時刻操作

// インスタンス生成。現在の日時になる
today = new Date();
console.log(today);

// Dateオブジェクトのメソッド
console.log(today.getFullYear()); // 西暦を表す4桁の数値
console.log(today.getMonth()); // 月を表す0~11の数値(0は1月、1は2月)
console.log(today.getDate()); // 日にちを表す数値
console.log(today.getDay()); // 曜日を表す0~6の数値(0は日曜日、1は月曜日)
console.log(today.getHours()); // 時刻の「時間」を表す0~23の数値
console.log(today.getMinutes()); // 時刻の「分」を表す0~59の数値
console.log(today.getSeconds()); // 時刻の「秒」を表す0~59の数値
console.log(today.getMilliseconds()); // 時刻の「ミリ秒」を表す0~999の数値
console.log(today.toString()); // 日付と時刻を文字列として返す
console.log(today.toUTCString()); // 日付と時刻の協定世界時を文字列として返す

// 日本語で「◯年◯月◯日」を表示させたい場合は、以下のように簡単に表示できる
today = new Date();
// 年月日を取得
let year = today.getFullYear();
let month = today.getMonth() + 1;
day = today.getDate();
// 出力
console.log(year + '年' + month + '月' + day + '日');

// ゼロパディング処理
// 月と日にちの先頭に0を足して「01月04日」のように表示したい場合は、「'0'」を追加して、slice()メソッドで桁数を合わせる。
// 1~9までは先頭に0が付くが、10以上の時は「010」と表示されないように2桁になるようにしないといけない。
// slice()メソッドを使用して「slice(-2)」と記述するが、引数をマイナス値にすると、文字列の末尾から数えて
// 切り抜くので（下2桁が切り抜かれる）「010」でも「10」と表示される。
// このような数値の桁数を合わせることをゼロパディングという。

let today2 = new Date();
// 年月日取得
let year2 = today.getFullYear();
let month2 = ( '0' + (today2.getMonth() + 1)).slice(-2);
let day2 = ( '0' + today2.getDate()).slice(-2);
console.log(year2 + '年' + month2 + '月' + day2 + '日');

// 曜日の追加
// 「getDay」メソッドでは曜日を数値で取得できる。
// 0は日曜日、1は月曜日・・・
// なので['日', '月', '火', '水', '木', '金', '土']のような配列を用意しておけば、良い。
let today3 = new Date();
let todayWeek = today3.getDay();
let dName = ['日', '月', '火', '水', '木', '金', '土'];
let dWeek = dName[todayWeek];
console.log(dWeek);

// toLocaleStringメソッドを使用すれば、「言語の規則に合わせた日時の文字列を取得できる」ので、
// 「2021/7/4 0:45:30」のように表示される。
// 国ごとに異なる書式にすることできる。
// 例えば、元号で表示したい場合は、「today.toLocaleDateString('ja-JP-u-ca-japanese')」と指定すれば、
// 「1/7/4 0:45:30」（令和元年7月4日）となる。
console.log(today3.toLocaleDateString());
console.log(today3.toLocaleDateString('ja-JP-u-ca-japanese'));

// Stringオブジェクトでの文字列操作
let s = new String('今日は水曜日です');
console.log(s.length); // 文字数が表示「8」
console.log(s.replace('水', '金')); // 水を金に置き換える
console.log(s.charAt(3)); // 0から始まる3つ目の文字「水」を取り出す
console.log(s.substring(3,6)); // 0から始まる3つ目の文字から6つ目の文字まで取り出す
console.log(s.slice(0,2)); // 文字列の開始位置から終了位置までの文字列をとる
console.log(s.split('')); // 文字列を分割して配列にする「['今', '日', 'は', '水', '曜', '日', 'で', 'す']
console.log(s.concat('!!!')); // 文字列の最後に文字列を連結する「今日は水曜日です!!!」
console.log(s.indexOf('水')); // 文字列を検索して、見つかったらインデックを番号を見つからなかったら「-1」を返す
console.log(s.match('水')); // 正規表現での文字列検索 ['水', index: 3, input: '今日は水曜日です', groups: undefined]
console.log(s.replace('水', '金')); // 正規表現の置換「今日は金曜曜日です」
console.log(s.search('水')); // 正規表現の検索、インデックス番号を返す
console.log(s.toLowerCase()); // 小文字に変換する
console.log(s.toUpperCase()); // 大文字に変換する
console.log(s.toString()); // 指定されたオブジェクトを表す文字列を取得する
console.log(s.valueOf()); // 指定されたオブジェクトのプリミティブな値を取得する
console.log(s.trim()); // 文字列の両端の空白文字（半角斬角のスペースやタブ）と改行文字を取り除く

// Numberオブジェクトで数値を表示する
// Numberオブジェクトのプロパティ
// MAX_VALUE：最大値を取得
// MIN_VALUE：最小値を取得
// MAX_SAFE_INTEGER：安全に扱える最大値を取得
// MIN_SAFE_INTEGER：安全に扱える最小値を取得
// NEGATIVE_INFINITY：負の無限大を示す値を返す
// POSITIVE_INFINITY：正の無限大を示す値を返す
// NaN：数値ではない値を取得（Nanとは「Not a Number」の意味。「0/0」のようなゼロ除算などなNanが返ってくる

// Numberオブジェクトのメソッド
let n = 22;
console.log(n.toString()); // 数値を文字列（あるいはn進数）に変換
n = 128.56934721;
console.log(n.toFixed(5)); // 四捨五入もしくは小数点の桁数を指定「128.56935」
console.log(n.toPrecision(3)); // 指定した桁数に変換。toFixedと同様に四捨五入されるが出力値は違う「129」
let num = parseFloat('128.56');
console.log(num); // 文字列の数字を小数点に変換
console.log(parseInt(num)); // 文字列を整数に変換「128」
console.log(Number.MAX_VALUE);
console.log(Number.NaN);

// DOMオブジェクト
// JavaScriptからHTMLやCSS、XMLなどを操作するための仕組みが「DOM」。
// DOM(Document Object Model：ドキュメントオブジェクトモデル)は、Webページにおけるオブジェクト指向の表現。
// 木構造（ノードツリー）の概念などが必要。

// JavaScriptのオブジェクトは、「ネイティブオブジェクト」と「ホストオブジェクト」、「ユーザー定義オブジェクト」などに分類される。
// JavaScriptの基本的な文法はECMAScriptの仕様を学習することになるので、ネイティブオブジェクトについて理解しておく必要がある。

// DOMを操作
// Capter-09.htmlを参照

// APIとは？
// アプリケーションとプログラムをつなぐインターフェースがAPI。
// API(Application Programming Interfaces：アプリケーションプログラミングインターフェース)とは、すでに提供されているサービスのデータを外部のプログラムから
// 利用するためのインターフェースのこと。
// 複雑かつ高度なプログラムを抽象化しており、簡単な構文を使用して活用することができる。
// コンセントにプラグを差し込めばすぐに動かせる家電のように単純化（汎用化）したものだとイメージすれば良い。

// ブラウザーのAPIとサードパーティのAPI
// WebブラウザーにはさまざまなAPIが組み込まれている。
// HTMLやCSSを操作できる「DOM API」や、視覚表現に関連したAPIにはHTML5の「Canvas」や「WebGL」などがある。
// 現在普及している大半のWebブラウザーがサポートしているので、JavaScriptでスクリプトを書くだけで用意に使用できる。
// そのほかにも、サーバからデータを取得するAPI(XMLHttpRequestなど)、動画やサウンドを扱うAPI(Web Audio APIなど)、モバイルデバイスから位置情報を取得できるデバイスAPIなどが組み込まれている。

// HTML5の標準API（一部）
// ・History API：ユーザーが使用しているブラウザーの履歴にアクセス
// ・HTML Drag and Drop API：ブラウザー上でドラッグ&ドロップの機能を提供する
// ・Fullscreen API：ブラウザーのUIを一時的に非表示にして全画面モードに切り替える
// ・File API：ローカルファイルのサムネイルプレニュー、選択、読み取りなど
// ・Web Strage API：ユーザーのブラウザーにパーソナライズされたデータを記録する
// ・Canvas API：ブラウザー上にグラフィックスを描画できる
// ・WebGL API：インタラクティブな2D/3Dグラフィックスを扱うことができる
// ・Web Audio API：音声データの読み込み、再生、音量調整、2つの音声間のクロスフェードなど
// ・Geolocation API：ユーザーが持つデバイスから位置情報を取得
// ・Camera API：ユーザーが持つデバイスのカメラで撮影したり、アップロードできる

// Twitterから提供されているAPI（一部）
// ・Search Tweets(Search API)：過去のツイートを検索
// ・Filter realtime Tweets(PowerTrack API)：リアルタイムのツイートから必要なものを取得
// ・Account Activity API：ユーザーアカウントのリアルタイムアクティビティを購読
// ・Direct Message API：パーソナらいぞされたダイレクトメッセージの配信
// ・Twitter for Websites(oEmbed API)：ツイートやタイムラインの埋め込みやツイートボタン、フォローボタンの設置
// ・Ads API：広告キャンペーンの作成と管理

// Webブラウザーのオブジェクト
// Web APIを「コンセントにプラグを差し込めばすぐに動かせる家電」と表現するなら、
// Webブラウザーのホストオブジェクトは「機械を動かすための部品の集まり」のようなもの。

// JavaScriptはWebブラウザーで動く、クライアントサイドのスクリプト言語。
// JavaScriptを全く使わないWebページは「静的」であり、印刷されたプリントのように見た目のデザインが中心になるが、
// JavaScriptを使用すれば「動的」なページとして開発できるので用途が広がる
// ブラウザオブジェクトにはDocumentオブジェクトやLocationオブジェクト、Historyオブジェクト、Navagatorオブジェクト、Screenオブジェクトなどがあるが、
// これらの最上位に置かれているのが「Windowオブジェクト」

// Webブラウザーを起動すると、まず自動的に「Windowオブジェクト」が生成される。

// 主なブラウザオブジェクト
// ・Windowオブジェクト：ウィンドウやダイアログの操作
// ・Locationオブジェクト：URL情報の取得やページ移動などの操作
// ・Historyオブジェクト：Webページの閲覧履歴の操作
// ・Navigatorオブジェクト：Webブラウザーの情報（種類やバージョン）の取得
// ・Screenオブジェクト：ディスプレイの情報（サイズや色数など）の取得
// ・Documentオブジェクト：ウィンドウに表示されたドキュメンどの操作

// Chapter-10.htmlを参照

// イベントオブジェクト
// JavaScriptでは、イベントオブジェクトを取得してさまざまな機能を動かすことができる
// ユーザーがマウスをクリックしたり、キーボートのキーを押したりする操作のことを「イベント」と呼ぶ
// Chapter7で学習した関数などはこのイベントによって実行され、アプリの機能として動かすことができるようになるが、イベントの発生時に実行される処理のことを「イベントハンドラ」と呼び、
// イベントハンドラは「on」キーワード+イベント名となっている。

