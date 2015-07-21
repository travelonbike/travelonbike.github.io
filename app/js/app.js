(function(){
'use strict';

var app = angular.module('travelonBike', [
  'ngRoute',
  'ngAnimate'
]).
config([
  '$routeProvider',
  function($routeProvider){
    $routeProvider.
      when('/', {
        controller: 'WelcomeController',
        templateUrl: 'welcome.html'
      }).
      when('/blog', {
        controller: 'BlogController',
        templateUrl: 'blog.html'
      }).
      when('/info', {
        controller: 'InfoController',
        templateUrl: 'info.html'
      }).
      when('/videos', {
        controller: 'VideosController',
        templateUrl: 'videos.html'
      }).
      otherwise({
        redirectTo: '/'
      });
  }
]).
controller('BlogController',[
  '$scope',
  function($scope){
    $scope.load = function () {
      $(function(){
        //Variables
        var a = 'a',
            activated = 'activated',
            display = 'display',
            elements = $('a'),
            flex = 'flex',
            loader = $('.loader'),
            none = 'none',
            slideInDown = 'slideInDown',
            slideOutUp = 'slideOutUp',
            ul = $('ul'),
            self = $('#blog'),
            //Helpers
            activateMenu = function () {
              if(ul.find(a).hasClass(activated)) {
                elements.removeClass(activated);
                self.toggleClass(activated);
              } else {
                self.toggleClass(activated);
              };
              return;
            },
            toggleMenu = function () {
              if (ul.css(display) === flex && loader.css(display) === none) {
                if(!(ul.find(a).hasClass(activated))) {
                  ul.toggleClass(slideInDown+' '+slideOutUp);
                }
              }
              else if (loader.css(display) === none) {
                ul.css(display, flex).toggleClass(slideInDown);
              } else {
                ul.css(display, flex);
              }
            };
        //Magic
        toggleMenu();
        activateMenu();
      });
    };
    $scope.pageClass = 'blogPage';
    $scope.load();
  }
]).
controller('InfoController',[
  '$scope',
  function($scope){
    $scope.load = function () {
      $(function(){
        //Variables
        var a = 'a',
            activated = 'activated',
            display = 'display',
            elements = $('a'),
            flex = 'flex',
            goDown = $('.goDown'),
            loader = $('.loader'),
            none = 'none',
            slideInDown = 'slideInDown',
            slideOutUp = 'slideOutUp',
            ul = $('ul'),
            self = $('#info'),
            view = $('.view'),
            //Helpers
            activateMenu = function () {
              if(ul.find(a).hasClass(activated)) {
                elements.removeClass(activated);
                self.toggleClass(activated);
              } else {
                self.toggleClass(activated);
              };
              return;
            },
            toggleMenu = function () {
              if (ul.css(display) === flex && loader.css(display) === none) {
                if(!(ul.find(a).hasClass(activated))) {
                  ul.toggleClass(slideInDown+' '+slideOutUp);
                }
              }
              else if (loader.css(display) === none) {
                ul.css(display, flex).toggleClass(slideInDown);
              } else {
                ul.css(display, flex);
              }
            };
        //Magic
        toggleMenu();
        activateMenu();
        //view.scroll(function () {
          //var scrollTop = view.scrollTop(),
              //height = view.height(),
              //distance = (height - scrollTop) / height;
          //if (height == 0) {
              //scrollTop = view.scrollTop(),
              //height = view.height(),
              //distance = (height - scrollTop) / height;
          //};
          //if (distance >= .98) {
            //goDown.css({
              //'opacity': 1,
              //'animation': 'beatButton 1.5s ease-in-out .3s infinite'
            //});
          //} else {
            //goDown.css({
              //'animation': 'none',
              //'opacity': distance - .25
            //});
          //};
          //console.log('distance = '+distance);
          //console.log('height = '+height);
          //console.log('scrollTop = '+scrollTop);
        //});
      });
    };
    $scope.pageClass = 'infoPage';
    $scope.load();
  }
]).
controller('VideosController',[
  '$scope',
  function($scope){
    $scope.load = function () {
      $(function(){
        //Variables
        var a = 'a',
            activated = 'activated',
            display = 'display',
            elements = $('a'),
            flex = 'flex',
            loader = $('.loader'),
            none = 'none',
            slideInDown = 'slideInDown',
            slideOutUp = 'slideOutUp',
            ul = $('ul'),
            self = $('#videos'),
            //Helpers
            activateMenu = function () {
              if(ul.find(a).hasClass(activated)) {
                elements.removeClass(activated);
                self.toggleClass(activated);
              } else {
                self.toggleClass(activated);
              };
              return;
            },
            toggleMenu = function () {
              if (ul.css(display) === flex && loader.css(display) === none) {
                if(!(ul.find(a).hasClass(activated))) {
                  ul.toggleClass(slideInDown+' '+slideOutUp);
                }
              }
              else if (loader.css(display) === none) {
                ul.css(display, flex).toggleClass(slideInDown);
              } else {
                ul.css(display, flex);
              }
            };
        //Magic
        toggleMenu();
        activateMenu();
      });
    };
    $scope.pageClass = 'videosPage';
    $scope.load();
  }
]).
controller('WelcomeController',[
  '$scope',
  function($scope){
    $scope.load = function () {
      $(function(){
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
        //Variables
        var a = 'a',
            activated = 'activated',
            display = 'display',
            elements = $('a'),
            flex = 'flex',
            loader = $('.loader'),
            none = 'none',
            slideInDown = 'slideInDown',
            slideOutUp = 'slideOutUp',
            ul = $('ul'),
            //Helpers
            deactivateMenu = function () {
              if(ul.find(a).hasClass(activated)) {
                elements.removeClass(activated);
              }
            },
            toggleMenu = function () {
              if (ul.css(display) === flex && ul.hasClass(slideInDown)) {
                ul.toggleClass(slideInDown+' '+slideOutUp);
              }
              else if (ul.find(a).hasClass(activated)) {
                ul.toggleClass(slideOutUp);
              }
            };
        //Magic
        toggleMenu();
        deactivateMenu();
      });
    };
    $scope.pageClass = 'welcomePage';
    $scope.load();
  }
])

})();
