mergeInto(LibraryManager.library, {
  // JSの呼び出し
  JSCall: function() {
    // グローバルメソッドを呼び出す
    console.log('call');
    window.unityCall && window.unityCall();
  }
});
