//Cargar Blogs
async function loadBlogs() {
    const blogContainer = document.getElementById('blog-container');

    try {
        db.collection('blogs').orderBy('date', 'desc').onSnapshot(snapshot => {
            blogContainer.innerHTML = '';
            if (snapshot.empty) {
                blogContainer.innerHTML = '<h2 class="section-title-lg uppercase desc"><small>No hay <br><br>recuerdos <br><br>en este momento.</small></h2>';
            } else {
                snapshot.forEach(doc => {
                    const blog = doc.data();

                    const blogHTML = `
                        <article class="item col-md-6">
                            <div class="image">
                                <a href="${blog.imageURL}" data-lightbox="WeddingPhotos" title="${blog.title}">
                                    <span class="btn btn-light"><i class="fa fa-file-o"></i>Expandir</span>
                                </a>
                                <img src="${blog.imageURL || 'https://via.placeholder.com/800x500'}" alt="Imagen del Blog" style="max-width: 100%; max-height: 250px; object-fit: cover;"/>
                            </div>

                            <div class="date">${new Date(blog.date.toDate()).toLocaleDateString()}</div>

                            <div class="info-blog">
                                <h3 class="post-title"><a href="blog-single-post.html">${blog.title}</a></h3>

                                <p>${blog.content}</p>

                                <div class="bottom-info">
                                </div>
                            </div>
                        </article>
                    `;
                    blogContainer.innerHTML += blogHTML;
                });
            }
        });
    } catch (error) {
        console.error('Error al cargar blogs:', error);
    }
}

// Subir blog
document.getElementById('blog-form').addEventListener('submit', async function (event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const imageFile = document.getElementById('image').files[0];
    if (!imageFile) {
        console.error('No se seleccionó ninguna imagen');
        return;
    }

    const storageRef = storage.ref('wedding-images/' + imageFile.name);
    const uploadTask = storageRef.put(imageFile);

    const statusContainer = document.getElementById('blog-status');
    const statusBar = document.getElementById('statusBlog');

    statusContainer.style.display = 'block';

    uploadTask.on('state_changed',
        function progress(snapshot) {
            const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

            statusBar.style.width = percentage + '%';
            statusBar.setAttribute('aria-valuenow', percentage);
            statusBar.innerText = Math.round(percentage) + '%';
        },
        function error(err) {
            console.error('Error al subir el blog:', err);
        },
        async function complete() {
            const imageURL = await uploadTask.snapshot.ref.getDownloadURL();

            await db.collection('blogs').add({
                title: title,
                content: content,
                imageURL: imageURL,
                date: new Date()
            });

            statusBar.innerText = '¡Blog subido exitosamente!';
            setTimeout(() => {
                statusContainer.style.display = 'none';
                statusBar.style.width = '0%';
                statusBar.innerText = '0%';

                const blogModal = new bootstrap.Modal(document.getElementById('modal'));
                blogModal.hide();

            }, 2000);

            document.getElementById('blog-form').reset();
            loadBlogs();
        }
    );
});