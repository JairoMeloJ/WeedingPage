//Cargar fotos
async function loadPhotos() {
    const photoContainer = document.getElementById('photo-container');

    try {
        db.collection('photos').orderBy('date', 'desc').onSnapshot(snapshot => {
            photoContainer.innerHTML = '';
            if (snapshot.empty) {
                photoContainer.innerHTML = '<h2 class="section-title-lg uppercase desc"><small>No hay <br><br>fotos <br><br>en este momento.</small></h2>';
            } else {
                snapshot.forEach(doc => {
                    const photo = doc.data();

                    const photoHTML = `
                        <li>
                            <div class="hover-info">
                                <a class="btn btn-light btn-sm only-icon"
                                    href="${photo.photoURL}"
                                    data-lightbox="WeddingPhotos" title="${photo.title}">
                                    <i class="fa fa-link"></i>
                                </a>
                            </div>
                            <img src="${photo.photoURL}" alt="Foto de la boda" width="635px" height="635px" />
                        </li>
                    `;
                    photoContainer.innerHTML += photoHTML;
                });
            }
        });
    } catch (error) {
        console.error('Error al cargar las fotos:', error);
    }
}

// Subir foto
document.getElementById('photo-form').addEventListener('submit', async function (event) {
    event.preventDefault();

    const title = document.getElementById('photo-title').value;
    const photoFile = document.getElementById('photo-file').files[0];
    if (!photoFile) {
        console.error('No se seleccionó ninguna foto');
        return;
    }

    const storageRef = storage.ref('wedding-photos/' + photoFile.name);
    const uploadTask = storageRef.put(photoFile);

    const statusContainer = document.getElementById('photo-status');
    const statusBar = document.getElementById('status');

    statusContainer.style.display = 'block';

    uploadTask.on('state_changed',
        function progress(snapshot) {
            const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

            statusBar.style.width = percentage + '%';
            statusBar.setAttribute('aria-valuenow', percentage);
            statusBar.innerText = Math.round(percentage) + '%';
        },
        function error(err) {
            console.error('Error al subir la foto:', err);
        },
        async function complete() {
            const photoURL = await uploadTask.snapshot.ref.getDownloadURL();

            await db.collection('photos').add({
                title: title,
                photoURL: photoURL,
                date: new Date()
            });

            statusBar.innerText = '¡Foto subida exitosamente!';
            setTimeout(() => {
                statusContainer.style.display = 'none';
                statusBar.style.width = '0%';
                statusBar.innerText = '0%';

                const photoModal = new bootstrap.Modal(document.getElementById('modal'));
                photoModal.hide();

            }, 2000);

            document.getElementById('photo-form').reset();
            loadPhotos();
        }
    );
});