'use strict';
$(function() {
  var x = 0
  var y = 0
  var selectedStr = '';
  $('body').on('mouseup', function(e){  //mouseupでイベント発火
    console.log(selectedStr)
    if (selectedStr.length < 1) {
      $('#depl-ext').remove()
    }
    selectedStr = ''
    if(window.getSelection){  //selectionオブジェクト取得
      if(window.getSelection().toString() !== '' && window.getSelection().toString() !== '\n'){  //文章チェック
        $('body').append(`<div id="depl-ext" style="cursor:pointer; z-index:99999;font-size:20px;text-align:center; position: absolute; width: 25px; height: 25px; background: red; top: ${y-35}px; left: ${x+5}px;">D</div>`)
        selectedStr = window.getSelection().toString();  //文章取得
      }
    }
  });
  $(window).on('mousemove', function(e) {
    x = e.pageX;
    y = e.pageY;
  });

  $('body').on('click', '#depl-ext', function(e){
    console.log(selectedStr);
  });
});



