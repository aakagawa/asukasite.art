var pictures = {
    IMG_0584: [
        "https://cloud-cube-us2.s3.amazonaws.com/n76qf8iabaqh/public/visuals/photos/IMG_0584/IMG_0584.jpg"
    ],
    for_kensuke: [
        "https://cloud-cube-us2.s3.amazonaws.com/n76qf8iabaqh/public/visuals/installation/230330_for_kensuke.png"
    ]
}

var imgThumbnail = document.getElementsByClassName('imgThumbnail');
var fullScreenPicture = document.getElementById('fullScreenPicture');
var preloader = document.getElementById('preloader');
var loader = document.getElementById('loader');

for (var o = 0; o < imgThumbnail.length; o++) {
    thisPicture = imgThumbnail[o];
    thisPicture.addEventListener('click', pictureFullScreen); 
}

function pictureFullScreen() {
    thisPicture = this.parentElement.parentElement.parentElement.children[1].id;
    fullScreenPicture.src = pictures[thisPicture][0];
    preloader.style.display = "block";
    loader.style.display = "block";
    pictureLoaded(); 
}

function pictureLoaded() { 
    fullScreenPicture.addEventListener('load', () => { 
        fullScreenBackground.style.display = "block"
        fullScreenPicture.style.display = "block";
        exitFullScreen.style.display = "block";
        preloader.style.display = "none";
        loader.style.display = "none";
        setTimeout(() => {
            exitFullScreen.style.display = "none";
        }, 2000);
        fullScreenPicture.addEventListener('mousemove', pictureFullScreenIO);
        exitFullScreen.addEventListener('click', () => {
            console.log('exitfullscreen clicked picture');
            fullScreenBackground.style.display = "none"; //black background
            fullScreenPicture.style.display = "none"; //the picture 
            exitFullScreen.style.display = "none";
        });
        document.addEventListener('keydown', (event) => {
            if (event.key === "Escape") {
                fullScreenBackground.style.display = "none"; //black background
                fullScreenPicture.style.display = "none"
                exitFullScreen.style.display = "none";
            }
        });
    });
}

function pictureFullScreenIO() {
    exitFullScreen.style.display = "block";
    fullScreenPicture.removeEventListener('mousemove', pictureFullScreenIO);
    setTimeout(() => {
        exitFullScreen.style.display = "none";
        fullScreenPicture.addEventListener('mousemove', pictureFullScreenIO); 
    }, 2000);
}
