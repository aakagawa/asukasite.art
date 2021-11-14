// global variables
window.onload = function() {findAudio(); init()};
function findAudio() {
    source = document.getElementById('source');
    player = document.getElementById('player');
}

function init() {
    thisthisTrack = tracks[0];
}

var i = 0;
var albums = {
    Samayo: [
        "https://cloud-cube-us2.s3.amazonaws.com/n76qf8iabaqh/public/Samayo.wav"
    ],
    Untitled: [
        "https://cloud-cube-us2.s3.amazonaws.com/n76qf8iabaqh/public/Untitled_no1.wav",
        "https://cloud-cube-us2.s3.amazonaws.com/n76qf8iabaqh/public/Untitled_no2.wav",
        "https://cloud-cube-us2.s3.amazonaws.com/n76qf8iabaqh/public/Untitled_no3.wav"
    ],
    Conditions: [
        "https://cloud-cube-us2.s3.amazonaws.com/n76qf8iabaqh/public/210313.wav",
        "https://cloud-cube-us2.s3.amazonaws.com/n76qf8iabaqh/public/210425.wav"
    ],
    Iluminación: [
        "https://cloud-cube-us2.s3.amazonaws.com/n76qf8iabaqh/public/Illuminacion_Installation_G.wav",
        "https://cloud-cube-us2.s3.amazonaws.com/n76qf8iabaqh/public/Illuminacion_Installation_A.wav"
    ],
    Marco: [
        "https://cloud-cube-us2.s3.amazonaws.com/n76qf8iabaqh/public/Marco_Scarassatti_Foundation_1_mix_4.wav",
        "https://cloud-cube-us2.s3.amazonaws.com/n76qf8iabaqh/public/Marco_Scarassatti_Foundation_2_mix_1.wav"
    ],
};

var elem = document.getElementById('progressBar');
var playpauseTrack = document.getElementsByClassName('playpauseTrack');
var biplay = document.getElementsByClassName('bi bi-play-fill');
var bipause = document.getElementsByClassName('bi bi-pause-fill');

// listening for selection of track
var tracks = document.getElementsByTagName('tr');
for (var j = 0; j < tracks.length; j++) {
    thisTrack = tracks[j];
    thisTrack.addEventListener('click', active);
    thisTrack.addEventListener('dblclick', playTrack);
    var thisplaypause = tracks[j].getElementsByClassName('playpauseTrack');
        for (var k = 0; k < thisplaypause.length; k++) {
        thisthisplaypause = thisplaypause[k];
        thisthisplaypause.addEventListener('click', playpauseOnTrack);
    }
}

// selection of track 
var current = document.getElementsByClassName('active');

function active() { 
    i = this.rowIndex;
    thisthisTrack = this; 
    thisAlbum = this.parentElement.parentElement.parentElement.id;
    source.src = albums[thisAlbum][i];
    current[0].className = current[0].className.replace('active', '');
    this.className += 'active';
}

function loadPlay() {
    player.load();
    player.play();
}

function displayPause() {
    document.getElementById('play').style.display = "none";
    document.getElementById('pause').style.display = "inline-block";
}

function displayPlay() {
    document.getElementById('play').style.display = "inline-block";
    document.getElementById('pause').style.display = "none";
}

function playTrack() {
    i = this.rowIndex;
    source.src = albums[thisAlbum][i];
    loadPlay();
    resetIcons();
    displayPause();
    var increment = setInterval(_increment, 1000);
    function _increment() {
        elem.style.width = ((player.currentTime / player.duration) * 100) + '%'; 
    }
}

function playpauseOnTrack() {
    i = this.parentElement.parentElement.rowIndex;
    thisAlbum = this.parentElement.parentElement.parentElement.parentElement.parentElement.id;
    source.src = albums[thisAlbum][i];
    if (player.currentSrc === source.src) {
        if (player.paused === true) {
            player.play();
            this.getElementsByClassName('bi bi-play-fill')[0].style.display = "none";
            this.getElementsByClassName('bi bi-pause-fill')[0].style.display = "inline-block";
            displayPause();
            var increment = setInterval(_increment, 1000);
            function _increment() {
                elem.style.width = ((player.currentTime / player.duration) * 100) + '%'; 
            }
        }
        else {
            player.pause();
            this.getElementsByClassName('bi bi-play-fill')[0].style.display = "inline-block";
            this.getElementsByClassName('bi bi-pause-fill')[0].style.display = "none"; 
            displayPlay();
            clearInterval(increment);
        }
    }
    else { 
        loadPlay();
        resetIcons();
        this.getElementsByClassName('bi bi-play-fill')[0].style.display = "none";
        this.getElementsByClassName('bi bi-pause-fill')[0].style.display = "inline-block";
        displayPause();
        var increment = setInterval(_increment, 1000);
        function _increment() {
            elem.style.width = ((player.currentTime / player.duration) * 100) + '%'; 
        }
    }
}

// playpause toggle
document.getElementById('playpause').onclick = function() {playpause()};
function playpause() {
    if (player.paused == true) {
        loadPlay();
        thisthisTrack.children[3].children[0].children[0].style.display = "none";
        thisthisTrack.children[3].children[0].children[1].style.display = "inline-block";
        displayPause();
        var increment = setInterval(_increment, 1000);
        function _increment() {
            elem.style.width = ((player.currentTime / player.duration) * 100) + '%'; 
        }
    }
    else {
        player.pause();
        console.log(thisTrack);
        thisthisTrack.children[3].children[0].children[0].style.display = "inline-block";
        thisthisTrack.children[3].children[0].children[1].style.display = "none";
        
        displayPlay();
        clearInterval(increment);
    }
}

document.getElementById('previousButton').onclick = function() {previous()};
function previous() {
    if (player.currentTime < 2.5) { 
        if (i !== 0) {
            resetIcons();
            i--;
        }
        source.src = albums[thisAlbum][i];
        loadPlay();
        var increment = setInterval(_increment, 1000);
        function _increment() {
            elem.style.width = ((player.currentTime / player.duration) * 100) + '%'; 
        }
    }
    else {
        source.src = albums[thisAlbum][i];
        loadPlay();
    }
}

document.getElementById('nextButton').onclick = function() {next()};
function next() {
    // console.log(albums[thisAlbum].length)
    if (i === albums[thisAlbum].length - 1) { 
        i = 0;
    }
    else {
        i++;
        resetIcons();
    }
    source.src = albums[thisAlbum][i];
    loadPlay()
    var increment = setInterval(_increment, 1000);
    function _increment() {
        elem.style.width = ((player.currentTime / player.duration) * 100) + '%'; 
    }
}

function resetIcons() {
    for (var l = 0; l < playpauseTrack.length; l++) {
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
        document.getElementById('end').innerHTML = '00:00';
    }
    else {
        document.getElementById('end').innerHTML = duration;
    }

    // formatting progress
    var currentTime = calcProgress(_progress);
    document.getElementById('progress').innerHTML = currentTime;

    // CHANGE THIS TO LOAD AND PLAY NEXT TRACK!!
    if (player.currentTime === player.duration) {
        i++;
        resetIcons();
        source.src = albums[thisAlbum][i];
        loadPlay();
        var increment = setInterval(_increment, 1000);
        function _increment() {
            elem.style.width = ((player.currentTime / player.duration) * 100) + '%'; 
        }
    }
}

function calcDuration(_duration) { 
    // formatting duration of audio
    var min = Math.floor(_duration / 60);
    var sec_int = _duration - (min * 60);
    var sec_ = Math.floor(sec_int);
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