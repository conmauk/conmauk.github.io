const scrollLeftBtn = document.getElementById('scrollLeft');
const scrollRightBtn = document.getElementById('scrollRight');
const imageBar = document.querySelector('.image-bar');
const imageSlotOne = document.getElementById('image-bar-one')
const imageSlotTwo = document.getElementById('image-bar-two')
const imageSlotThree = document.getElementById('image-bar-three')

const totalImages = 5; // Total number of images
const imageFolder = 'images/'
const images = ['copper-plank-beer2.jpg', 'copper-plank-growler2.jpg', 'copper-plank-support-local2.jpg', 'copper-plank-outdoor2.jpg', 'copper-plank-taps2.jpg']
let currentImageIndex = 0;

scrollRightBtn.addEventListener('click', () => {
    if(currentImageIndex >= totalImages-1){
        currentImageIndex = 0;
    }else{
        currentImageIndex++;
    }
    console.log('Current index: ' + currentImageIndex);
    imageSlotOne.src = imageFolder + images[currentImageIndex%totalImages];
    imageSlotTwo.src = imageFolder + images[(currentImageIndex+1)%totalImages];
    imageSlotThree.src = imageFolder + images[(currentImageIndex+2)%totalImages];

});

scrollLeftBtn.addEventListener('click', () => {
    if(currentImageIndex <= 0){
        currentImageIndex = totalImages-1;
    }else{
        currentImageIndex--;
    }
    console.log('Current index: ' + currentImageIndex);

    imageSlotOne.src = imageFolder + images[currentImageIndex%totalImages];
    imageSlotTwo.src = imageFolder + images[(currentImageIndex+1)%totalImages];
    imageSlotThree.src = imageFolder + images[(currentImageIndex+2)%totalImages];
});

document.addEventListener("DOMContentLoaded", function() {
    resizeDoc();
});

function resizeDoc(){
    scaleStoryAside();
    resizeMenuButton();
}
function scaleStoryAside() {
    if(window.innerWidth >= 900)
    {
        var ourStoryText = document.getElementById("story-body");
        var ourStoryAsideContainer = document.getElementById("story-header-aside");
        ourStoryAsideContainer.style.height = ourStoryText.offsetHeight + "px";
    }
    else{
        var ourStoryAsideContainer = document.getElementById("story-header-aside");
        ourStoryAsideContainer.style.height = null;
    }
}

function resizeMenuButton() {
    // Get the first button
    var tapButton = document.getElementById("main-tap-selection-button");
    // Get the second button
    var menuButton = document.getElementById("main-menu-button");

    // Set the width of the second button to match the width of the first button
    menuButton.style.width = tapButton.offsetWidth + "px";
}

window.onresize = resizeDoc;