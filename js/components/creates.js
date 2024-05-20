export class TrackCardCreator {
    constructor(track, albumImage, dataRelease) {
        this.track = track;
        this.albumImage = albumImage;
        this.dataRelease = dataRelease;
        this.createCard()
    }
    createCard() {
        // Crear el elemento de la tarjeta de pista
        const trackCard = document.createElement("div");
        trackCard.classList.add("track__card");

        // Crear y añadir la imagen de la pista
        const img = document.createElement("img");
        img.src = this.albumImage;
        img.alt = this.track.name;
        trackCard.appendChild(img);

        // Crear y añadir información sobre la pista
        const xdat = document.createElement("div");
        xdat.classList.add("xdat");
        const trackName = document.createElement("p");
        trackName.classList.add("aname3");
        trackName.textContent = this.track.name;
        const trackArtists = document.createElement("p");
        trackArtists.classList.add("autor__age3");
        trackArtists.textContent = this.track.artists.map(artist => artist.name).join(", ");
        xdat.appendChild(trackName);
        xdat.appendChild(trackArtists);
        trackCard.appendChild(xdat);
        // Crear y añadir información adicional sobre la pista

        // const ydat = document.createElement("div");
        // ydat.classList.add("ydat");
        // const duration = document.createElement("p");
        // duration.classList.add("time");
        // duration.textContent = this.msToMinutesSeconds(this.track.duration_ms);
        // const releaseYear = document.createElement("p");
        // releaseYear.classList.add("year");
        // releaseYear.textContent = this.dataRelease;
        // ydat.appendChild(duration);
        // ydat.appendChild(releaseYear);
        // trackCard.appendChild(ydat);

        return trackCard;
    }
    // Método para convertir milisegundos a minutos y segundos
    msToMinutesSeconds(ms) {
        const minutes = Math.floor(ms / 60000);
        const seconds = ((ms % 60000) / 1000).toFixed(0);
        return `${minutes}:${(seconds < 10 ? "0" : "")}${seconds}`;
    }
}
//usar la clase............
//const creator = new TrackCardCreator(trackData, albumImage, dataRelease);
// const trackCard = creator.createCard();

export class AlbumCardCreator {
    constructor(data) {
        this.albumData = data;
        this.fragment = document.createDocumentFragment();
    }

    createCard() {
        this.albumData.forEach(album => {
            const card = document.createElement("div");
            card.classList.add("card");

            const img = document.createElement("img")
            img.src = album.images[1].url;
            img.alt = album.name;

            const name = document.createElement("p");
            name.classList.add("albumName");
            name.textContent = album.name;

            const artist = document.createElement("p");
            artist.classList.add("artist");
            let parseDate = album.release_date.split("-");
            artist.textContent = `${album.artists[0].name} -${parseDate[0]}`;

            card.appendChild(img);
            card.appendChild(name);
            card.appendChild(artist);

            card.dataset.albumId = album.id;
            card.addEventListener("click", () => this.handleAlbumClick(card.dataset.albumId))

            this.fragment.appendChild(card)
        });
        return this.fragment;
        // return card;
    }

    async handleAlbumClick(albumId) {
        const albumFrame = document.querySelector("my-frame");
        albumFrame.setAttribute("uri", `spotify:album:${albumId}`);

        if (this.albumData) {
            const trackslist = document.querySelector(".tracks_list")
            trackslist.innerHTML = "";
            const album = this.albumData.find(album => album.id === albumId);
            if (album) {
                const albumImage = this.albumData[0].images[1].url;//asumiendo que tiene almenos una imagen
                const dataRelease = this.albumData[0].release_date.split("-")[0];
                for (const track of this.albumData[0].tracks.items) {
                    const trackCard = TrackCardCreator(track, albumImage, dataRelease);
                    trackslist.appendChild(trackCard);
                }
            } else {
                console.error(`No se encuentra el Album del ID ${this.albumId}`);
            }
        } else {
            console.error(`No se pudo obtener la lista de canciones del álbum con ID ${albumId}`);
        }
    }

    createAlbumCards() {
        this.albumData.forEach(album => {
            const card = this.createCard(album);
            this.fragment.appendChild(card);
        });
        return this.fragment;
    }
}
