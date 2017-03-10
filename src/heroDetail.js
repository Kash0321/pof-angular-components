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

    function fileNameChanged(event) {
        var files = event.target.files; // FileList object

        // files is a FileList of File objects. List some properties.
        var output = [];
        for (var i = 0, f; f = files[i]; i++) {
            alert(escape(f.name) + f.type || 'n/a' + ') - ' +
                    f.size + ' bytes, last modified: ' +
                    f.lastModifiedDate.toLocaleDateString());
        }
        //document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
    };

    ctrl.pushImage = function() {
        //ctrl.hero.photo000 = ctrl.hero.photo001;
        //ctrl.hero.photo000Type = ctrl.hero.photo001Type;

        // Check for the various File API support.
        if (window.File && window.FileReader && window.FileList && window.Blob) {
            alert(ctrl.fileName);
            toDataUrl('C:/Users/sergio.castillo/Desktop/Nikon-1-V3-sample-photo.jpg', function(dataUri) {
                alert(dataUri);
            }, 'png');
        } else {
            alert('The File APIs are not fully supported in this browser.');
        }
    };


    function toDataUrl(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.onload = function() {
            var reader = new FileReader();
            reader.onloadend = function() {
                callback(reader.result);
            }
            reader.readAsDataURL(xhr.response);
        };
        xhr.open('GET', url);
        xhr.responseType = 'blob';
        xhr.send();
    }

    function toDataUrl(src, callback, outputFormat) {
        var img = new Image();
        img.crossOrigin = 'Anonymous';
        img.onload = function() {
            var canvas = document.createElement('CANVAS');
            var ctx = canvas.getContext('2d');
            var dataURL;
            canvas.height = this.height;
            canvas.width = this.width;
            ctx.drawImage(this, 0, 0);
            dataURL = canvas.toDataURL(outputFormat);
            callback(dataURL);
        };
        img.src = src;
        if (img.complete || img.complete === undefined) {
            img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
            img.src = src;
        }
    }

    ctrl.$postLink = function() {
        console.log("Executing postLink event");
        var inputBox = $($element).find(":input")
        inputBox.addClass("onhover-emphasized");

        var label = $($element).find("label");
        label.addClass("onhover-emphasized");
        
        var fileSelector = $($element).find(":input[type=file]")
        fileSelector.change(function(event) 
        {
            fileNameChanged(event)
        });
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