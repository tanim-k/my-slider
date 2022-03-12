// make an images array 
const images = [
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    'images/4.jpg',
    'images/5.jpg',
    'images/6.jpg',
    'images/7.jpg',
    'images/8.jpg',
    'images/9.jpg'
];
let imageIndex = 0;
const imgElement = document.getElementById('slider-image');
setInterval(() => {
    if(imageIndex >= images.length){
        imageIndex = 0;
    }
    const imgUrl = images[imageIndex];
    imgElement.setAttribute('src', imgUrl);
    imageIndex++;
}, 1500)