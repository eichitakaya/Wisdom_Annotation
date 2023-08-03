"use strict";
window.onload = function () {
    var imageUpload = document.getElementById('imageUpload');
    var imageDisplay = document.getElementById('imageDisplay');
    imageUpload.addEventListener('change', function (event) {
        if (!event.target.files)
            return;
        var file = event.target.files[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function (event) {
                imageDisplay.src = event.target.result;
            };
            reader.readAsDataURL(file);
        }
    });
};
