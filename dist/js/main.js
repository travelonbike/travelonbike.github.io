$(function(){
'use strict';

var Wrapper = $('.wrapper'),
    Video = $('.video');

function resizeVideo() {
  var WrapperWidth = Wrapper.width(),
      WrapperHeight = Wrapper.height();
  if (WrapperWidth / WrapperHeight >= 1.7777777777) {
    Video.css({
      height: WrapperWidth/1.7777777777,
      width: WrapperWidth
    });
  } else {
    Video.css({
      height: WrapperHeight,
      width: WrapperHeight*1.7777777777
    });
  }
  console.log('Resizing!');
};

resizeVideo();
$(window).resize(resizeVideo);

});
