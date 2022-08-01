var i = 0;
var albums = {
    Azabu_Improvs: [
        "https://cloud-cube-us2.s3.amazonaws.com/n76qf8iabaqh/public/sounds/Azabu_Improv/Azabu_Solo_1.wav",
        "https://cloud-cube-us2.s3.amazonaws.com/n76qf8iabaqh/public/sounds/Azabu_Improv/Azabu_Solo_2.wav",
        "https://cloud-cube-us2.s3.amazonaws.com/n76qf8iabaqh/public/sounds/Azabu_Improv/Azabu_Solo_3.wav",
        "https://cloud-cube-us2.s3.amazonaws.com/n76qf8iabaqh/public/sounds/Azabu_Improv/Azabu_Solo_4.wav"
    ],
    Samayo: [
        "https://cloud-cube-us2.s3.amazonaws.com/n76qf8iabaqh/public/sounds/Samayo/Samayo.wav"
    ],
    Marco: [
        "https://cloud-cube-us2.s3.amazonaws.com/n76qf8iabaqh/public/sounds/Marco/Marco_Scarassatti_Foundation_1.wav",
        "https://cloud-cube-us2.s3.amazonaws.com/n76qf8iabaqh/public/sounds/Marco/Marco_Scarassatti_Foundation_2.wav"
    ],
    Conditions: [
        "https://cloud-cube-us2.s3.amazonaws.com/n76qf8iabaqh/public/sounds/Conditions/Condition_1.wav",
        "https://cloud-cube-us2.s3.amazonaws.com/n76qf8iabaqh/public/sounds/Conditions/Condition_2.wav"
    ],
    Untitled: [
        "https://cloud-cube-us2.s3.amazonaws.com/n76qf8iabaqh/public/sounds/Untitled/Untitled_1.wav",
        "https://cloud-cube-us2.s3.amazonaws.com/n76qf8iabaqh/public/sounds/Untitled/Untitled_2.wav",
        "https://cloud-cube-us2.s3.amazonaws.com/n76qf8iabaqh/public/sounds/Untitled/Untitled_3.wav"
    ],
};

var source = document.getElementById('source');
var player = document.getElementById('player');

var tracks = document.getElementsByTagName('tr');
var current = document.getElementsByClassName('active');
var playpauseTrack = document.getElementsByClassName('playpauseTrack');
var biplay = document.getElementsByClassName('bi bi-play-fill');
var bipause = document.getElementsByClassName('bi bi-pause-fill');

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

function playTrack() {
    i = this.rowIndex;
    source.src = albums[thisAlbum][i];
    loadPlay();
    resetIcons();
    displayPause();
}

function playpauseOnTrack() {
    i = this.parentElement.parentElement.rowIndex;
    thisAlbum = this.parentElement.parentElement.parentElement.parentElement.parentElement.id;
    source.src = albums[thisAlbum][i];
    if (player.currentSrc === source.src) {
        if (player.paused === true) {
            console.log('source is same, player was paused');
            resetIcons(); 
            this.getElementsByClassName('bi bi-play-fill')[0].style.display = "none";
            this.getElementsByClassName('bi bi-pause-fill')[0].style.display = "inline-block";
            loadPlay();
            
        }
        else {
            console.log('source is same, player playing');
            resetIcons();
            this.getElementsByClassName('bi bi-play-fill')[0].style.display = "inline-block";
            this.getElementsByClassName('bi bi-pause-fill')[0].style.display = "none"; 
            player.pause();
        }
    }
    else {
        if (player.paused === true) {
            console.log('source is different, player was paused');
            resetIcons();
            this.getElementsByClassName('bi bi-play-fill')[0].style.display = "none";
            this.getElementsByClassName('bi bi-pause-fill')[0].style.display = "inline-block";
            loadPlay();
        }
        else {
            console.log('source is different, player was playing');
            resetIcons();
            this.getElementsByClassName('bi bi-play-fill')[0].style.display = "none";
            this.getElementsByClassName('bi bi-pause-fill')[0].style.display = "inline-block";
            player.pause();
            loadPlay();
        }
    }
}

function resetIcons() {
    for (var l = 0; l < playpauseTrack.length; l++) {
        biplay[l].style.display = "inline-block";
        bipause[l].style.display = "none";
    }
}

