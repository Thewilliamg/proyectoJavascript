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
        trackCard.classList.add("cardOftracks");

        // Crear y añadir la imagen de la pista
        const img = document.createElement("img");
        img.src = this.albumImage;
        img.alt = this.track.name;
        trackCard.appendChild(img);

        // Crear y añadir información sobre la pista
        const left = document.createElement("div");
        left.classList.add("left_info");
        const trackName = document.createElement("b");
        trackName.classList.add("aname3");
        trackName.textContent = this.track.name;
        const trackArtists = document.createElement("small");
        trackArtists.classList.add("autor__age3");
        trackArtists.textContent = this.track.artists.map(artist => artist.name).join(", ");

        left.appendChild(trackName);
        left.appendChild(trackArtists);

        // Crear y añadir información adicional sobre la pista

        const right = document.createElement("div");
        right.classList.add("right_info");
        const duration = document.createElement("p");
        duration.classList.add("time");
        duration.textContent = this.msToMinutesSeconds(this.track.duration_ms);
        const releaseYear = document.createElement("p");
        releaseYear.classList.add("year");
        releaseYear.textContent = this.dataRelease;
        right.appendChild(duration);
        right.appendChild(releaseYear);

        trackCard.appendChild(left);
        trackCard.appendChild(right);

        return trackCard;
    }
    // Método para convertir milisegundos a minutos y segundos
    msToMinutesSeconds(ms) {
        const minutes = Math.floor(ms / 60000);
        const seconds = ((ms % 60000) / 1000).toFixed(0);
        return `${minutes}:${(seconds < 10 ? "0" : "")}${seconds}`;
    }
}

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

            const artist = document.createElement("small");
            artist.classList.add("artist");
            let parseDate = album.release_date.split("-");
            artist.textContent = `${album.artists[0].name} - ${parseDate[0]}`;

            card.appendChild(img);
            card.appendChild(name);
            card.appendChild(artist);

            card.dataset.albumId = album.id;
            card.addEventListener("click", () => this.handleAlbumClick(card.dataset.albumId))
            this.fragment.appendChild(card)
        });
        return this.fragment;
    }

    async handleAlbumClick(albumId) {
        const albumFrame = document.querySelector("my-frame");
        albumFrame.setAttribute("uri", `spotify:album:${albumId}`);
        if (this.albumData) {
            const trackslist = document.querySelector(".track_list")
            trackslist.innerHTML = "";
            const album = this.albumData.find(album => album.id === albumId);
            if (album) {
                const albumImage = album.images[1].url;//asumiendo que tiene almenos una imagen
                let parseDate = album.release_date.split("-");
                const dataRelease = parseDate[0];

                for (const track of album.tracks.items) {
                    const newTrackcard = new TrackCardCreator(track, albumImage, dataRelease);
                    const trackCard = newTrackcard.createCard();
                    trackslist.appendChild(trackCard);
                }
            } else {
                console.error(`No se encuentra el Album del ID ${this.albumId}`);
            }
        } else {
            console.error(`No se pudo obtener la lista de canciones del álbum con ID ${albumId}`);
        }
    }

}

export class RecommendedTrackCardCreator {
    constructor(track, albumImage, dataRelease) {
        this.track = track;
        this.albumImage = albumImage;
        this.dataRelease = dataRelease;
        this.createCard()
    }
    createCard() {
        // Crear el elemento de la tarjeta de pista
        const trackCard = document.createElement("div");
        trackCard.classList.add("recomended_card");

        // Crear y añadir la imagen de la pista
        const img = document.createElement("img");
        img.src = this.albumImage;
        img.alt = this.track.name;
        trackCard.appendChild(img);

        // Crear y añadir información sobre la pista
        const left = document.createElement("div");
        left.classList.add("left_info");
        const trackName = document.createElement("b");
        trackName.classList.add("aname3");
        trackName.textContent = this.track.name;
        const trackArtists = document.createElement("small");
        trackArtists.classList.add("autor__age3");
        trackArtists.textContent = this.track.artists.map(artist => artist.name).join(", ");

        left.appendChild(trackName);
        left.appendChild(trackArtists);

        // Crear y añadir información adicional sobre la pista

        const right = document.createElement("div");
        right.classList.add("right_info");
        const duration = document.createElement("p");
        duration.classList.add("time");
        duration.textContent = this.msToMinutesSeconds(this.track.duration_ms);
        const releaseYear = document.createElement("p");
        releaseYear.classList.add("year");
        releaseYear.textContent = this.dataRelease;
        right.appendChild(duration);
        right.appendChild(releaseYear);

        trackCard.appendChild(left);
        trackCard.appendChild(right);

        return trackCard;
    }
    // convertir milisegundos a minutos y segundos la duración de la cancion
    msToMinutesSeconds(ms) {
        const minutes = Math.floor(ms / 60000);
        const seconds = ((ms % 60000) / 1000).toFixed(0);
        return `${minutes}:${(seconds < 10 ? "0" : "")}${seconds}`;
    }
}