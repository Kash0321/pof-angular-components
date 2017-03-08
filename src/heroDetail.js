(function(angular) {
  'use strict';

function HeroDetailController($element) {
    var ctrl = this;

    ctrl.$onInit = function() {
        console.log("Hola onInit");
        console.log($element);
    }

    ctrl.$postLink = function() {
        console.log("Hola postLink");
        console.log($element);
        $($element).children(":input").addClass("red-back");
        $($element).children(":input").css("background-color", "blue");
        $($element).children(":input").css("color", "red");
        $($element).children(":input").attr("ng-disabled", "true");
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