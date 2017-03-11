(function(angular) {
  'use strict';
angular
    .module('heroApp', [])
    .controller('MainController', function MainCtrl() {
        this.hero = {
            canChangeName: true,
            name: 'Spiderman',
            imgfileName: '',
            img000: '',
            img000Type: ''
        };
    });
})(window.angular);