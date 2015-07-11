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
      'showinfo': 0},
    videoId: 'ZvrjQOHJIAA',
    width: '100%'
 });
};
function onPlayerReady(event) {
  event.target.mute();
  loader.css('opacity',0);
  window.setTimeout(function(){
    loader.remove();
  }, 500);
};
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING) {
    $('.cover').css('opacity',0);
  }
};

//jQuery after everything loads.
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

var h1 = $('main section h1'),
    h2 = $('main section h2'),
    logo = $('.logo'),
    elementsFadeOutUp = [h1],
    elementsFadeOutDown = [h2,logo];

function enter() {
  fadeOutUp(elementsFadeOutUp);
  fadeOutDown(elementsFadeOutDown);
};

function fadeOutUp(elements) {
  for(var i=0; i<elements.length; i++) {
    elements[i].addClass('fadeOutUp');
  }
};

function fadeOutDown(elements) {
  for(var i=0;i<elements.length; i++) {
    elements[i].addClass('fadeOutDown');
  }
};

resizeVideo();
$(window).resize(resizeVideo);

$('main > section').click(enter);

//SVG shit for use CSS
/*
 * Replace all SVG images with inline SVG
 */
jQuery('img.svg').each(function(){
  var $img = jQuery(this);
  var imgID = $img.attr('id');
  var imgClass = $img.attr('class');
  var imgURL = $img.attr('src');
  jQuery.get(imgURL, function(data) {
    // Get the SVG tag, ignore the rest
    var $svg = jQuery(data).find('svg');
    // Add replaced image's ID to the new SVG
    if(typeof imgID !== 'undefined') {
        $svg = $svg.attr('id', imgID);
    }
    // Add replaced image's classes to the new SVG
    if(typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass+' replaced-svg');
    }
    // Remove any invalid XML tags as per http://validator.w3.org
    $svg = $svg.removeAttr('xmlns:a');
    // Replace image with new SVG
    $img.replaceWith($svg);
  }, 'xml');
});
});
