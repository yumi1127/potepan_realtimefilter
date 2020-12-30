$(function () {
  searchWord = function(){
    let searchResult,
        searchText = $(this).val(), // 検索ボックスに入力された値をvalue値に設定
        targetText,
        performResult,
        hitNum;


    // 検索結果を格納するための配列を用意
    searchResult = [];
    performResult = [];

    // 検索結果エリアの表示を空にする
    $('#search-result__list').empty();
    $('.search-result__hit-num').empty();

    // 検索ボックスに値が入ってる場合
    if (searchText != '') {
      $('span').each(function() {
        targetText = $(this).text();

        // 検索対象となるリストに入力された文字列が存在するかどうかを判断
        if (targetText.indexOf(searchText) != -1) {
          //あった場合はsearchresult配列にtargetTextをいれる
          searchResult.push(targetText);
          //なぜかあった場合にもaddclass hiddenが適応されていたので、それをshowクラスで打ち消す
          $(this).addClass("show");
        }else{
          //無かった場合にはperformResult配列にtargetTextをいれる
          performResult.push(targetText);
          //hiddenクラスを付け足して要素を隠す
          $(this).addClass("hidden");
        }
      });
    }else{
      $('span').addClass("show");
    }

    // ヒットの件数をページに出力
    hitNum = '<span>検索結果</span>：' + searchResult.length + '件見つかりました。';
    $('.search-result__hit-num').append(hitNum);

    //console.log(searchResult);
    //console.log(performResult);
  };

  // searchWordの実行
  $('#search-text').on('input',searchWord);
});
