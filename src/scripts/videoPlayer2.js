var i = 0;
var videos = {
    Minami_Aoyama: [
        "https://cloud-cube-us2.s3.amazonaws.com/n76qf8iabaqh/public/visuals/videos/Minami_Aoyama/Minami_Aoyama_Highlights_final.mp4"
    ],
    Early_Summer_Air: [
        "https://cloud-cube-us2.s3.amazonaws.com/n76qf8iabaqh/public/visuals/videos/Early_Summer_Air/Early_Summer_Air_2_2.mp4"
    ],
};

var vsource = document.getElementById('vsource');
var vplayer = document.getElementById('vplayer');

var vplaypause = document.getElementsByClassName('vplaypause');
var vplaypauseFullScreen = document.getElementById('vplaypauseFullScreen');
var vplayerBackground = document.getElementById('vplayerBackground');
var exitFullScreen = document.getElementById('exitFullScreen');
var vloader = document.getElementsByClassName('vloader');
var vbiplay = document.getElementsByClassName('vbi bi-play-fill');
var vbipause = document.getElementsByClassName('vbi bi-pause-fill');

for (var j = 0; j < vplaypause.length; j++) {
    thisVideo = vplaypause[j];
    thisVideo.addEventListener('click', playpause);
}

vplaypauseFullScreen.addEventListener('click', playpauseFullScreen);

function playpauseFullScreen() {
    console.log('playpauseFullScreen clicked!');
    if (vplayer.paused === true) {
        resetvIcons();
        vplaypauseFullScreen.children[0].style.display = "none";
        vplaypauseFullScreen.children[1].style.display = "inline-block";
        vplayer.play();
    }
    else {
        console.log('video paused on fullscreen');
        resetvIcons();
        vplaypauseFullScreen.children[0].style.display = "inline-block";
        vplaypauseFullScreen.children[1].style.display = "none";
        vplayer.pause();
    }
}

function vloadPlay() {
    vplayer.load();
    vplayer.play();
}

function playpause() {
    thisVideo = this.parentElement.parentElement.parentElement.children[1].id;
    vsource.src = videos[thisVideo][0];
    if (vplayer.currentSrc === vsource.src) {
        if (vplayer.paused === true) {
            console.log('source is same, player was paused');
            resetvIcons();
            this.getElementsByClassName('vbi bi-play-fill')[0].style.display = "none";
            this.getElementsByClassName('vbi bi-pause-fill')[0].style.display = "inline-block";
            this.parentElement.children[0].style.display = 'block'; //loader
            vplayerBackground.style.display = "block";//black video background
            exitFullScreen.style.display = "block";
            vplayer.style.display = "block"; //the video
            playpauseControlFullScreen();
            vplaypauseFullScreen.children[0].style.display = "none";
            vplaypauseFullScreen.children[1].style.display = "inline-block";
            vloadPlay();
        }
        else {
            console.log('source is same, player was playing');
            resetvIcons();
            this.getElementsByClassName('vbi bi-play-fill')[0].style.display = "inline-block";
            this.getElementsByClassName('vbi bi-pause-fill')[0].style.display = "none";
            this.parentElement.children[0].style.display = 'none';
            vplayer.pause();
        }
    }
    else { 
        if (vplayer.paused === true) {
            console.log('source is different, player was paused');
            resetvIcons();
            this.getElementsByClassName('vbi bi-play-fill')[0].style.display = "none";
            this.getElementsByClassName('vbi bi-pause-fill')[0].style.display = "inline-block";
            this.parentElement.children[0].style.display = 'block'; //loader
            vplayerBackground.style.display = "block"; //black video background
            exitFullScreen.style.display = "block";
            vplayer.style.display = "block"; //the video
            playpauseControlFullScreen();
            vplaypauseFullScreen.children[0].style.display = "none";
            vplaypauseFullScreen.children[1].style.display = "inline-block";
            vloadPlay();
        }
        else {
            console.log('source is different, player was playing');
            resetvIcons();
            this.getElementsByClassName('vbi bi-play-fill')[0].style.display = "none";
            this.getElementsByClassName('vbi bi-pause-fill')[0].style.display = "inline-block";
            this.parentElement.children[0].style.display = 'block'; //loader
            vplayerBackground.style.display = "block"; //black video background
            exitFullScreen.style.display = "block";
            vplayer.style.display = "block"; //the video 
            playpauseControlFullScreen(); 
            vplaypauseFullScreen.children[0].style.display = "none";
            vplaypauseFullScreen.children[1].style.display = "inline-block";
            vloadPlay();
        }
    }
}

function playpauseControlFullScreen() { 
    vplayer.addEventListener('loadeddata', function() {
        resetvIcons(); 
        vplaypauseFullScreen.style.display = "block";
        exitFullScreen.style.display = "block";
        setTimeout(function() {
            vplaypauseFullScreen.style.display = "none";
            exitFullScreen.style.display = "none";
        }, 2000);
        vplayer.addEventListener('mousemove', playpauseControlFullScreenIO);
        exitFullScreen.addEventListener('click', function() {
            vplayer.pause(); 
            vplayerBackground.style.display = "none"; //black video background
            vplayer.style.display = "none"; //the video 
            vplaypauseFullScreen.style.display = "none";
            exitFullScreen.style.display = "none";
        });
        document.addEventListener('keydown', function(event) {
            if (event.key === "Escape") {
                console.log('escape pressed!');
                vplayer.pause(); 
                vplayerBackground.style.display = "none"; //black video background
                vplayer.style.display = "none"; //the video 
                vplaypauseFullScreen.style.display = "none";
                exitFullScreen.style.display = "none";
            }
        });
    });
}

function playpauseControlFullScreenIO() {
    vplaypauseFullScreen.style.display = "block";
    exitFullScreen.style.display = "block";
    vplayer.removeEventListener('mousemove', playpauseControlFullScreenIO);
    
    console.log('mousemove');
    setTimeout(function () {
        vplaypauseFullScreen.style.display = "none";
        exitFullScreen.style.display = "none";
        vplayer.addEventListener('mousemove', playpauseControlFullScreenIO); 
    }, 2000);

}

function resetvIcons() {
    for (var m = 0; m < vplaypause.length; m++) {
        vbiplay[m].style.display = "inline-block";
        vbipause[m].style.display = "none";

        vloader[m].style.display = "none";
    }
}