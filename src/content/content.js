chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
  let selection;
  console.log(request.message); // -> 選択範囲ちょうだい が出力される

  // 画面で選択されている部分を文字列で取得する
  if(window.getSelection){
    selection = window.getSelection().toString();
  }else{
    selection = '';
  }
  sendResponse(selection);
});