// Global variables
player = document.getElementsByClassName('vplayer')[0];
source = document.getElementsByClassName('vsource')[0];
elem = document.getElementsByClassName('vprogressBar')[0];

var biplay = document.getElementsByClassName('bi bi-play-fill');
var bipause = document.getElementsByClassName('bi bi-pause-fill');

var videos = document.getElementsByClassName('bi');
for (var j = 0; j < videos.length; j++) {
    thisVideo = videos[j];
    thisVideo.addEventListener('click', playVideo);
}

var fullscreen = document.getElementsByClassName('bi-fullscreen');
for (var k = 0; k < fullscreen.length; k++) {
    thisFullscreen = fullscreen[k];
    thisFullscreen.addEventListener('click', toggleFullscreen,);
}

function playVideo() {
    current = this.parentElement.parentElement; 
    source = current.getElementsByClassName('vsource')[0];
    elem = current.getElementsByClassName('vprogressBar')[0];
    if (player.currentSrc === source.src) {
        if (player.paused === true) {
            player.play();
            current.getElementsByClassName('bi bi-play-fill')[0].style.display = "none";
            current.getElementsByClassName('bi bi-pause-fill')[0].style.display = "inline-block";
            var increment = setInterval(_increment, 1000);
            function _increment() {
                elem.style.width = ((player.currentTime / player.duration) * 100) + '%'; 
            }
        }
        else {
            player.pause();
            current.getElementsByClassName('bi bi-play-fill')[0].style.display = "inline-block";
            current.getElementsByClassName('bi bi-pause-fill')[0].style.display = "none"; 
            clearInterval(increment);
        }
    }
    else {
        player.pause();
        resetIcons();
        player = current.getElementsByClassName('vplayer')[0];
        player.play();
        current.getElementsByClassName('bi bi-play-fill')[0].style.display = "none";
        current.getElementsByClassName('bi bi-pause-fill')[0].style.display = "inline-block";
        var increment = setInterval(_increment, 1000);
        function _increment() {
            elem.style.width = ((player.currentTime / player.duration) * 100) + '%'; 
        }
    }
}

function toggleFullscreen() {
	if (player.requestFullScreen){
		player.requestFullScreen();
    } 
    else if (player.webkitRequestFullScreen){
		player.webkitRequestFullScreen();
    } 
    else if (player.mozRequestFullScreen){
		player.mozRequestFullScreen();
    }
    if (player.paused === true) {
        current = this.parentElement.parentElement; 
        player.play();
        current.getElementsByClassName('bi bi-play-fill')[0].style.display = "none";
        current.getElementsByClassName('bi bi-pause-fill')[0].style.display = "inline-block";
        var increment = setInterval(_increment, 1000);
        function _increment() {
            elem.style.width = ((player.currentTime / player.duration) * 100) + '%'; 
        }
    }
}

var vcontrols = document.getElementsByClassName('vcontrols');
function resetIcons() {
    for (var l = 0; l < vcontrols.length; l++) {
        biplay[l].style.display = "inline-block";
        bipause[l].style.display = "none";
    }
}

function progressBar() {
    var _duration = player.duration;
    var _progress = player.currentTime;
    // formatting duration  
    var duration = calcDuration(_duration);
    if (isNaN(_duration) === true) {
        current.getElementsByClassName('vend')[0].innerHTML = '00:00';
    }
    else {
        current.getElementsByClassName('vend')[0].innerHTML = duration;
    }
    // formatting progress
    var currentTime = calcProgress(_progress);
    current.getElementsByClassName('vprogress')[0].innerHTML = currentTime;
    
    // CHANGE THIS TO LOAD AND PLAY NEXT TRACK!
    if (player.currentTime === player.duration) {
        player.pause();
        clearInterval(increment);
        document.getElementById('play').style.display = "inline-block";
        document.getElementById('pause').style.display = "none"; 
    }
}

function calcDuration(_duration) { 
    // formatting duration of audio
    var min = Math.floor(_duration / 60);
    var sec_int = _duration - (min * 60);
    var sec_ = Math.round(sec_int);
    var sec_str = sec_.toString();
    if (sec_ < 10 ) {
        sec_str = '0' + sec_str   
    }
    var sec = sec_str.substr(0, 2);
    var time = min + ':' + sec;
    return time;
}

function calcProgress(currentTime) {
    // formattting progress of audio
    var min_progress = parseInt(currentTime / 60) % 60;
    var sec_progress_long = currentTime % 60;
    var sec_progress = sec_progress_long.toFixed();
    var _progress = (min_progress < 10 ? "0" + min_progress : min_progress) + ":" 
        + (sec_progress < 10 ? "0" + sec_progress : sec_progress);
    return _progress;
}   