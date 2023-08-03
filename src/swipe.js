"use strict";
window.onload = function () {
    var imageUpload = document.getElementById('imageUpload');
    var imageDisplay = document.getElementById('imageDisplay');
    var prevButton = document.getElementById('prevButton');
    var nextButton = document.getElementById('nextButton');
    var images = [];
    var currentIndex = 0;
    imageUpload.addEventListener('change', function (event) {
        images = [];
        currentIndex = 0;
        var files = event.target.files;
        if (files) {
            Array.from(files).forEach(function (file) {
                var reader = new FileReader();
                reader.onload = function (event) {
                    var target = event.target;
                    if (target) {
                        images.push(target.result);
                        if (images.length === 1) {
                            displayImage();
                        }
                    }
                };
                reader.readAsDataURL(file);
            });
        }
    });
    prevButton.addEventListener('click', function () {
        currentIndex = Math.max(currentIndex - 1, 0);
        displayImage();
    });
    nextButton.addEventListener('click', function () {
        currentIndex = Math.min(currentIndex + 1, images.length - 1);
        displayImage();
    });
    function displayImage() {
        imageDisplay.src = images[currentIndex];
    }
};
