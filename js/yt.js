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
}
function onPlayerReady(event) {
  event.target.mute();
  loader.css('opacity',0);
  window.setTimeout(function(){
    loader.remove();
  }, 500);
}
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING) {
    $('.cover').css('opacity',0);
  }
}
