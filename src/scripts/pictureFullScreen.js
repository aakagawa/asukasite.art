var pictures = {
    IMG_0584: [
        "https://cloud-cube-us2.s3.amazonaws.com/n76qf8iabaqh/public/visuals/photos/IMG_0584.jpg"
    ],
    Spring:
    [
        "https://cloud-cube-us2.s3.amazonaws.com/n76qf8iabaqh/public/visuals/paintings/Spring.jpg"
    ],
    Winter:
    [
        "https://cloud-cube-us2.s3.amazonaws.com/n76qf8iabaqh/public/visuals/paintings/Winter.jpg"
    ],
}

var pictureThumbnail = document.getElementsByClassName('pictureThumbnail');
var fullScreenPicture = document.getElementById('fullScreenPicture');
var preloader = document.getElementById('preloader');
var loader = document.getElementById('loader');

for (var o = 0; o < pictureThumbnail.length; o++) {
    thisPicture = pictureThumbnail[o];
    thisPicture.addEventListener('click', pictureFullScreen); 
}

function pictureFullScreen() {
    thisPicture = this.parentElement.children[1].id;
    fullScreenPicture.src = pictures[thisPicture][0];
    preloader.style.display = "block";
    loader.style.display = "block";
    pictureLoaded(); 
}

function pictureLoaded() { 
    fullScreenPicture.addEventListener('load', function() { 
        fullScreenBackground.style.display = "block"
        fullScreenPicture.style.display = "block";
        exitFullScreen.style.display = "block";
        preloader.style.display = "none";
        loader.style.display = "none";
        setTimeout(function() {
            exitFullScreen.style.display = "none";
        }, 2000);
        fullScreenPicture.addEventListener('mousemove', pictureFullScreenIO);
        exitFullScreen.addEventListener('click', function() {
            console.log('exitfullscreen clicked picture');
            fullScreenBackground.style.display = "none"; //black background
            fullScreenPicture.style.display = "none"; //the picture 
            exitFullScreen.style.display = "none";
        });
        document.addEventListener('keydown', function(event) {
            if (event.key === "Escape") {
                fullScreenBackground.style.display = "none"; //black video background
                fullScreenPicture.style.display = "none"
                exitFullScreen.style.display = "none";
            }
        });
    });
}

function pictureFullScreenIO() {
    exitFullScreen.style.display = "block";
    fullScreenPicture.removeEventListener('mousemove', pictureFullScreenIO);
    setTimeout(function () {
        exitFullScreen.style.display = "none";
        fullScreenPicture.addEventListener('mousemove', pictureFullScreenIO); 
    }, 2000);
}
