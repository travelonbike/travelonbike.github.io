'use strict';
//YouTube video shit.
var loader = $('.loader'),
    cover = $('.cover');
var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/player_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
function onYouTubePlayerAPIReady() {
  player = new YT.Player('player', {
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange},
    height: '100%',
    playerVars: {
      'autoplay': 1,
      'controls': 0,
      'loop': 1,
      'rel': 0,
      'showinfo': 0,
      //'playlist': 'BZP1rYjoBgI'},
    //videoId: 'BZP1rYjoBgI',
      //'playlist': 'ZvrjQOHJIAA'},
    //videoId: 'ZvrjQOHJIAA',
    },
    width: '100%'
 });
};
function onPlayerReady(event) {
  event.target.mute();
  loader.css('opacity',0);
  window.setTimeout(function(){
    loader.css('display','none');
  }, 500);
};
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING) {
    cover.css('opacity',0);
  } else if (event.data == YT.PlayerState.ENDED) {
    cover.css('opacity',1);
  }
};

//jQuery after everything loads.
$(function(){

//Self explaining variables. Duh!
var keepRatio = 1.7777777777, //16:9 ratio
    video = $('.video'),
    wrapper = $('.wrapper');

//Helpers for keep this shit working.
function resizeVideo() {
  var wrapperWidth = wrapper.width(),
      wrapperHeight = wrapper.height();
  if (wrapperWidth / wrapperHeight >= keepRatio) {
    video.css({
      height: wrapperWidth/keepRatio,
      width: wrapperWidth
    });
  } else {
    video.css({
      height: wrapperHeight,
      width: wrapperHeight*keepRatio
    });
  }
};

//This shit inits.
resizeVideo();
$(window).resize(resizeVideo);

});
