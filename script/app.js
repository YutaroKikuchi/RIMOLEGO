/// <reference path="./reference.ts"/>

// index.htmlで定義したidの画像・ボタンがクリックされた時それぞれ関数を呼び出す
var linkconnect = document.getElementById("connect"); // idからhtmlの要素を探す
linkconnect.addEventListener("click", function () {
    createSocket(); // この中で関数を呼び出す
});
var linkdisconnect = document.getElementById("disconnect");
linkdisconnect.addEventListener("click", function () {
    destroySocket();
});
var upload = document.getElementById("upload");
upload.addEventListener("click", function () {
    uploadFile();
});
var upload = document.getElementById("send");
upload.addEventListener("click", function () {
    sendText();
});
