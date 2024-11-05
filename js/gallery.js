const imagePaths = [
    './images/2022/1.JPG', './images/2022/2.JPG', './images/2022/3.JPG', './images/2022/4.jpg',
    './images/2022/5.JPG', './images/2022/6.JPG', './images/2022/7.jpg', './images/2022/8.JPG',
    './images/2023/1.JPG', './images/2023/2.JPG', './images/2023/3.JPG', './images/2023/4.JPG',
    './images/2023/5.JPG', './images/2024/1.jpg', './images/2024/2.jpg', './images/2024/3.jpg',
    './images/2024/4.JPG', './images/2024/5.JPG', './images/2024/6.jpg', './images/2024/7.jpg',
    './images/2024/8.jpg', './images/2024/9.jpg', './images/2024/10.jpg',
    './images/gallery/6D0A9E4A-42EA-4A5D-B24E-C05836CEE735.JPG',
    './images/gallery/089BA487-22B5-4006-BCF5-B9445A057C2C.JPG',
    './images/gallery/902792D7-A764-4F21-9EB2-DC70047D9A58.JPG',
    './images/gallery/85629061-C89E-41D2-A0EB-7921A2A47A08.JPG',
    './images/gallery/B706B47B-291D-4C3E-8EDB-642D91ECDE7A.JPG',
    './images/gallery/bc0b1dfd-d6de-4f96-aa0c-a1271776db62.JPG',
    './images/gallery/IMG_1399.JPG', './images/gallery/IMG_1408.JPG', './images/gallery/IMG_1409.JPG',
    './images/gallery/IMG_1410.JPG', './images/gallery/IMG_1415.JPG', './images/gallery/IMG_1416.JPG',
    './images/gallery/IMG_1421.JPG', './images/gallery/IMG_1453.JPG', './images/gallery/IMG_1460.JPG',
    './images/gallery/IMG_1471.JPG', './images/gallery/IMG_1473.JPG', './images/gallery/IMG_1476.JPG',
    './images/gallery/IMG_1481.JPG', './images/gallery/IMG_1482.JPG', './images/gallery/IMG_1638.JPG',
    './images/gallery/IMG_1669.JPG', './images/gallery/IMG_1672.JPG', './images/gallery/IMG_1787.JPG',
    './images/gallery/IMG_1807.JPG', './images/gallery/IMG_1833.JPG', './images/gallery/IMG_1840.JPG',
    './images/gallery/IMG_1841.JPG', './images/gallery/IMG_1842.JPG', './images/gallery/IMG_1848.JPG',
    './images/gallery/IMG_1851.JPG', './images/gallery/IMG_1859.JPG', './images/gallery/IMG_1892.JPG',
    './images/gallery/IMG_1898.JPG', './images/gallery/IMG_1954.JPG', './images/gallery/IMG_3078.JPG',
    './images/gallery/IMG_3619.JPG', './images/gallery/IMG_3620.JPG', './images/gallery/IMG_4402.JPG'
];

// Función para mezclar la lista de imágenes
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffle(imagePaths);

let imagesLoaded = 0;
const imagesPerLoad = 8;
const galleryContainer = document.getElementById('gallery');

function loadImages() {
    const startPosition = imagesLoaded;

    for (let i = imagesLoaded; i < imagesLoaded + imagesPerLoad && i < imagePaths.length; i++) {
        const img = document.createElement('img');
        img.src = imagePaths[i];
        img.alt = `Imagen ${i + 1}`;
        img.style.borderRadius = '10px';
        img.classList.add('fade-in');

        const item = document.createElement('div');
        item.classList.add('gallery-item');
        item.appendChild(img);

        galleryContainer.appendChild(item);
    }

    imagesLoaded += imagesPerLoad;

    const lastLoadedImage = galleryContainer.children[startPosition];
    if (lastLoadedImage) {
        lastLoadedImage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    if (imagesLoaded >= imagePaths.length) {
        document.getElementById('loadMoreBtn').style.display = 'none';
    }
}

loadImages();

document.getElementById('loadMoreBtn').addEventListener('click', loadImages);