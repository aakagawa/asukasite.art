// Show/hide preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    const loader = document.getElementById('loader');

    preloader.style.display = 'none';
    loader.style.display = 'none';
});

// Style navicons
let container = document.getElementById('container');

var thenavicons = document.getElementsByClassName('navicon');
var activeNavicon = document.getElementsByClassName('activeNavicon');
var activateRespectiveNaviconIO = true;

for (var i = 0; i < thenavicons.length; i++) {
    thisNavicon = thenavicons[i];
    thisNavicon.addEventListener('click', activateNavicon);
}

function activateNavicon() {
    activateRespectiveNaviconIO = false;
    activeNavicon[0].className = activeNavicon[0].className.replace('activeNavicon', '');
    this.className += 'activeNavicon';
    setTimeout(() => {
        activateRespectiveNaviconIO = true;
    }, 1000);
}

function activateRespectiveNavicon() {
    if (activateRespectiveNaviconIO) {
        for (let i = 0; i < pages.length; i++) {
            if (Math.abs(Xoffset - pages[i]) < (windowWidth / 6)) {
                activeNavicon[0].className = activeNavicon[0].className.replace('activeNavicon', '');
                thenavicons[i].className += 'activeNavicon';
                break;
            }
        }
    }
}

container.addEventListener('scroll', activateRespectiveNavicon);

//Style navicon2 
var thenavicon2s = document.getElementsByClassName('navicon2text');
var activeNavicon2 = document.getElementsByClassName('activeNavicon2');
var activateRespectiveNavicon2IO = true;

for (var j = 0; j < thenavicon2s.length; j++) {
    thisNavicon2 = thenavicon2s[j];
    thisNavicon2.addEventListener('click', activateNavicon2); 
}

function activateNavicon2() {
    activateRespectiveNavicon2IO = false;
    activeNavicon2[0].className = activeNavicon2[0].className.replace('activeNavicon2', '');
    this.className += ' activeNavicon2';
    setTimeout(() => {
        activateRespectiveNavicon2IO = true;
    }, 1000);
}

function activateRespectiveNavicon2() {
    if (activateRespectiveNavicon2IO) {
        for (let i = 0; i < pages.length; i++) {
            if (Math.abs(Xoffset - pages[i]) < (windowWidth / 6)) {
                activeNavicon2[0].className = activeNavicon2[0].className.replace('activeNavicon2', '');
                thenavicon2s[i].className += ' activeNavicon2';
                break;
            }
        }
    }
}

container.addEventListener('scroll', activateRespectiveNavicon2);

// Style pages
let pages = [0];
let Xoffset, Yoffset;

window.addEventListener('load', windowSize);
window.addEventListener('resize', windowSize);

function windowSize() {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;

    for (let i = 1; i <= 6; i++) {
        pages[i] = windowWidth * i;
    }
}

function scrollPosition() {
    Xoffset = container.scrollLeft;
}

container.addEventListener('scroll', scrollPosition);

let elements = [
    document.getElementById('home'),
    document.getElementById('about'),
    document.getElementById('sounds'),
    document.getElementById('visuals'),
    document.getElementById('interdisciplinary'),
    // document.getElementById('notations'),
    document.getElementById('contact')
];

for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', function () {
        container.scrollTo(pages[i], Yoffset);
    });
}

// Style nav2 
let navicons = [0];
let navXoffset, navYoffset;

window.addEventListener('load', navicon2Size);
window.addEventListener('resize', navicon2Size);

function navicon2Size() {
    for (let i = 1; i <= 5; i++) {
        let naviconWidth = navElements[0].getBoundingClientRect().width;
        navicons[i] = naviconWidth * i;
    }
}

let nav2 = document.getElementById('nav2');

function navScrollPosition() {
    navXoffset = nav2.scrollLeft;
}

nav2.addEventListener('scroll', navScrollPosition);

let navElements = [
    document.getElementById('home2'),
    document.getElementById('about2'),
    document.getElementById('sounds2'),
    document.getElementById('visuals2'),
    document.getElementById('interdisciplinary2'),
    // document.getElementById('notations2'),
    document.getElementById('contact2')
];

for (let i = 0; i < navElements.length; i++) {
    navElements[i].addEventListener('click', function () {
        nav2.scrollTo({ left: navicons[i] });
        scrollToFunctions[i]();
    });
}

// Define the scrollTo functions
function scrollToHome() {
    container.scrollTo(pages[0], Yoffset);
}

function scrollToAbout() {
    container.scrollTo(pages[1], Yoffset);
}

function scrollToSounds() {
    container.scrollTo(pages[2], Yoffset);
}

function scrollToVisuals() {
    container.scrollTo(pages[3], Yoffset);
}

function scrollToInterdisciplinary() {
    container.scrollTo(pages[4], Yoffset);
}

// function scrollToNotations() {
//     container.scrollTo(pages[5], Yoffset);
// }

function scrollToContact() {
    container.scrollTo(pages[5], Yoffset);
}

// Create an array of scrollTo functions
let scrollToFunctions = [
    scrollToHome,
    scrollToAbout,
    scrollToSounds,
    scrollToVisuals,
    scrollToInterdisciplinary,
    // scrollToNotations,
    scrollToContact
];

function scrollToRespectiveNavicon() {
    if (activateRespectiveNavicon2IO) {
        for (let i = 0; i < pages.length; i++) {
            if (Xoffset === pages[i]) {            
                nav2.scrollTo({ left: navicons[i] });
                break;
            }
        }
    }
}

container.addEventListener('scroll', scrollToRespectiveNavicon);

let lang = document.getElementById('lang');
let EN = document.getElementById('English'), JA = document.getElementById('Japanese');
let biographyEnglish = document.getElementById('biographyEN');
let biographyJapanese = document.getElementById('biographyJA');
let menuEnglish = document.getElementById('menuEN');
let menuJapanese = document.getElementById('menuJA');

EN.addEventListener('click', english);
JA.addEventListener('click', japanese);

function displayLang() {
    let distancetoAbout = Math.abs(Xoffset - pages[1]);
    let distanceToContact = Math.abs(Xoffset - pages[5]);

    if (distancetoAbout >= windowWidth) {
        if (distanceToContact >= windowWidth) {
            lang.style.opacity = 0;
        } else if (distanceToContact < windowWidth) {
            let langOpacity = 1 - (distanceToContact / windowWidth);
            lang.style.opacity = Math.round(langOpacity * 100) / 100;
        }
    } else if (distancetoAbout < windowWidth) {
        let langOpacity = 1 - (distancetoAbout / windowWidth);
        lang.style.opacity = Math.round(langOpacity * 100) / 100;
    }
}

container.addEventListener('scroll', displayLang);

function english() {
    biographyEnglish.style.display = 'block';
    biographyJapanese.style.display = 'none';
    menuEnglish.style.display = 'block';
    menuJapanese.style.display = 'none';
}

function japanese() {
    biographyEnglish.style.display = 'none';
    biographyJapanese.style.display = 'block';
    menuEnglish.style.display = 'none';
    menuJapanese.style.display = 'block';
}

// Show/hide cvresume 
const cvRésumé = document.getElementById('cvrésumé');
const cvResume = document.getElementById('cvResume');
const cvRésuméHide = document.getElementById('cvrésuméhide');

cvRésumé.addEventListener('click', () => {
    cvResume.style.display = 'block';
    cvRésuméHide.style.display = 'block';
});

cvRésuméHide.addEventListener('click', () => {
    cvResume.style.display = 'none';
    cvRésuméHide.style.display = 'none';
});

// Style images
var imgs = document.getElementsByClassName('img');
window.addEventListener('load', imgDimension);
window.addEventListener('resize', imgDimension);

function imgDimension() {
    for (var j = 0; j < imgs.length; j++) {
        var imgsrc = imgs[j].style.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2');
        var img = new Image();
        var imgWidth, imgHeight, imgAspectRatio;
        img.src = imgsrc;
        imgWidth = img.width;
        imgHeight = img.height;
        imgAspectRatio = imgWidth / imgHeight;
        var innerDivWidth, innerDivHeight; 
        if (windowWidth < 960) {
            if (imgAspectRatio > 1) {
                imgs[j].style.width = Math.round((windowWidth))+ "px";
                imgs[j].style.height = Math.round(windowWidth / imgAspectRatio) + "px";
            } 
            else { 
                imgs[j].style.height = Math.round((windowHeight * 0.5)) + "px";
                imgs[j].style.width = Math.round((windowHeight * 0.5) * imgAspectRatio) + "px";
            }
        }
        else { // REVISE!!!!
            if (imgHeight > windowHeight) {
                imgs[j].style.height = Math.round((windowHeight * 0.5)) + "px";
                innerDivHeight = imgs[j].clientHeight - imgs[j].style.paddingTop - imgs[j].style.paddingBottom;
                imgs[j].style.width = Math.round((innerDivHeight * imgAspectRatio)) + "px";
            }
            else if (imgWidth > (windowWidth * 0.66)) {
                imgs[j].style.width = Math.round((windowWidth * 0.66)) + "px";
                innerDivWidth = imgs[j].clientWidth - imgs[j].style.paddingLeft - imgs[j].style.paddingRight;
                imgs[j].style.height = Math.round(innerDivWidth / imgAspectRatio) + "px";   
            }
        }
    }
}

// Carousel images
var left = document.getElementsByClassName('left');
var right = document.getElementsByClassName('right');
var multiImg = document.getElementsByClassName('multiImg');
for (var l = 0; l < left.length; l++) {
    thisLeft = left[l];
    thisLeft.addEventListener('click', scrollLeft);
}

for (var r = 0; r < right.length; r++) {
    thisRight = right[r];
    thisRight.addEventListener('click', scrollRight);
}

function scrollLeft() {
    var thisMultiImg = this.parentElement.children[2];
    widthOfThisMultiImg = thisMultiImg.clientWidth;
    thisMultiImg.scrollBy(-widthOfThisMultiImg / 6, 0);
}

function scrollRight() { 
    var thisMultiImg = this.parentElement.children[2];
    widthOfThisMultiImg = thisMultiImg.clientWidth;
    thisMultiImg.scrollBy(widthOfThisMultiImg / 6, 0);
}

// Style scores 
var scores = document.getElementsByClassName('score');
window.addEventListener('load', scoreDimension);
window.addEventListener('resize', scoreDimension);
function scoreDimension() { 
    for (var i = 0; i < scores.length; i++) {
        var scoresrc = scores[i].style.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2');
        var score = new Image(); 
        var scoreWidth, scoreHeight, scoreAspectRatio; 
        score.src = scoresrc; 
        scoreWidth = score.width;
        scoreHeight = score.height;
        scoreAspectRatio = scoreWidth / scoreHeight;
        var divWidth, divHeight; 
        divWidth = scores[i].clientWidth - scores[i].style.paddingLeft - scores[i].style.paddingRight;
        scores[i].style.height = divWidth / scoreAspectRatio + "px"; 
    }
}