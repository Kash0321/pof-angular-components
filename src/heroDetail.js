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

        // Loop through the FileList and render image files as thumbnails.
        for (var i = 0, f; f = files[i]; i++) {

            // Only process image files.
            if (!f.type.match('image.*')) {
                continue;
            }

            var reader = new FileReader();

            // Closure to capture the file information.
            reader.onload = (function(theFile) {
                return function(e) {

                    var dataUrl = e.target.result;

                    alert(dataUrl);

                    // Render thumbnail.
                    // var span = document.createElement('span');
                    // span.innerHTML = ['<img class="thumb" src="', e.target.result,
                    //                     '" title="', escape(theFile.name), '"/>'].join('');
                    // document.getElementById('list').insertBefore(span, null);
                };
            })(f);

            // Read in the image file as a data URL.
            reader.readAsDataURL(f);

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