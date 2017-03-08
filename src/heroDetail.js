(function(angular) {
  'use strict';

function HeroDetailController($element) {
    var ctrl = this;

    ctrl.$onInit = function() {
        console.log("Executing onInit event");
    }

    ctrl.gotFocus = function($event) {
        $($event.target).select();
    };

    ctrl.$postLink = function() {
        console.log("Executing postLink event");
        var inputBox = $($element).find(":input")
        inputBox.addClass("onhover-emphasized");

        var label = $($element).find("label");
        label.addClass("onhover-emphasized");
    }
}

angular
    .module('heroApp')
    .component('heroDetail', {
        templateUrl: './heroDetail.html',
        controller: HeroDetailController,
        bindings: {
            hero: '='
        }
    });
})(window.angular);