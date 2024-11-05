const weddingDate = new Date("2024-12-21T00:00:00"); // Fecha y hora de activación

const photoUploadButton = document.getElementById('photoUploadButton');
const photoUploadMessage = document.getElementById('photoUploadMessage');
const blogUploadButton = document.getElementById('blogUploadButton');
const blogUploadMessage = document.getElementById('blogUploadMessage');

const currentDate = new Date();

if (currentDate >= weddingDate) {
    photoUploadButton.style.display = 'inline-block';
    blogUploadButton.style.display = 'inline-block';
} else {
    photoUploadMessage.style.display = 'block';
    blogUploadMessage.style.display = 'block';
}
