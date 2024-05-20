// const url = 'https://spotify23.p.rapidapi.com/albums/?ids=3IBcauSj5M2A6lTeffJzdv';
const url = "/db/json.json";
const options = {
    method: 'GET',
    headers: {
        // 'X-RapidAPI-Key': '1095f8b652msh95f265095f02f92p1dd4c1jsncde0e9ba16cf',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
};
(async () => {
    try {
        const response = await fetch(url, options);
        const data = await response.json();

        const albumsContainer = document.getElementById('albums-container');

        data.forEach(album => {
            const albumTitle = album.name;
            const artistName = album.artists[0].name;
            const releaseDate = new Date(album.release_date).getFullYear();
            const albumImage = album.images[0].url;
            const tracks = album.tracks.items.map(track => track.name);
            const trackCount = album.tracks.items.length;

            // Crear la tarjeta de álbum
            const card = document.createElement('div');
            card.classList.add('card');

            const title = document.createElement('h2');
            title.textContent = albumTitle;

            const artist = document.createElement('p');
            artist.textContent = `Artist: ${artistName}`;

            const year = document.createElement('p');
            year.textContent = `Released: ${releaseDate}`;

            card.appendChild(title);
            card.appendChild(artist);
            card.appendChild(year);

            albumsContainer.appendChild(card);

            // Añadir el evento de clic a la tarjeta
            card.addEventListener('click', () => {
                showModal(albumImage, albumTitle, tracks);
            });
        });

        // Funcionalidad de búsqueda
        const searchBar = document.getElementById('search-bar');
        searchBar.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const cards = document.querySelectorAll('.card');

            cards.forEach(card => {
                const title = card.querySelector('h2').textContent.toLowerCase();
                const artist = card.querySelector('p').textContent.toLowerCase();

                if (title.includes(searchTerm) || artist.includes(searchTerm)) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        });

        // Funcionalidad de la ventana emergente
        const modal = document.getElementById('modal');
        const albumImageElem = document.getElementById('album-image');
        const trackListElem = document.getElementById('track-list');
        const trackCountElem = document.getElementById('track-count');
        const closeModalElem = document.querySelector('.close');

        function showModal(albumImage, albumTitle, tracks, trackCount) {
            albumImageElem.src = albumImage;
            trackListElem.innerHTML = '';
            trackCountElem.textContent = `Number of tracks: ${trackCount}`;
            tracks.forEach(track => {
                const trackItem = document.createElement('li');
                trackItem.textContent = track;
                trackListElem.appendChild(trackItem);
            });

            modal.style.display = 'flex';
        }

        closeModalElem.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });

    } catch (error) {
        console.error(error);
    }
})();