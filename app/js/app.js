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
      when('/:section', {
        controller: 'SectionController',
        templateUrl: function (params) {
          return params.section+'.html';
        }
      }).
      otherwise({
        redirectTo: '/'
      });
  }
]).
controller('SectionController',[
  '$scope',
  '$rootScope',
  '$routeParams',
  'sharedProperties',
  function($scope,$rootScope, $routeParams,sharedProperties){
    $scope.pageClass = $routeParams.section+'Page';
    if(sharedProperties.getProperty('menu')){
      $rootScope.pageClassRoot = 'animated fadeInDown '+$routeParams.section+'Nav';
      sharedProperties.setProperty('menu',false);
    } else {
      $rootScope.pageClassRoot = $routeParams.section+'Nav';
    }
  }
]).
controller('WelcomeController',['$scope','$rootScope','sharedProperties',function($scope,$rootScope,sharedProperties){
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
  if(!(sharedProperties.getProperty('menu'))){
    $rootScope.pageClassRoot = 'animated fadeOutUp'
    sharedProperties.setProperty('menu',true);
  } else {
    $rootScope.pageClassRoot = 'welcomeNav'
  }
  $scope.load();
}]).
service('sharedProperties', function(){
  var properties = {
    'menu': true
  };
  return {
    getProperty: function (key) {
      return properties[key];
    },
    setProperty: function (key, value) {
      properties[key] = value;
    }
  };
});

})();
