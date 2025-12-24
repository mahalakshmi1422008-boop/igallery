const gallery = [
    { src: "big temple.jpg ", caption: " BIG TEMPLE" },
    { src: " chichen itza.jpg", caption: "CHICHEN ITZA " },
    { src: " great wall of china.jpg", caption: " GREAT WALL OF CHINA" },
    { src: " taj mahal.jpg", caption: " TAJ MAHAL" },
     { src: "petra.jpg ", caption: " PETRA" },
];

let index = 0;

function updateGallery() {
    document.getElementById("galleryImage").src = gallery[index].src;
    document.getElementById("caption").textContent = gallery[index].caption;
}

function nextImage() {
    index++;
    if (index >= gallery.length) {
        index = 0;
    }
    updateGallery();
}

function prevImage() {
    index--;
    if (index < 0) {
        index = gallery.length - 1;
    }
    updateGallery();
}