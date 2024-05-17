export class TrackCardCreator {
    constructor(track, albumImage, dataRelease) {
        this.track = track;
        this.albumImage = albumImage;
        this.dataRelease = dataRelease;
    }
    createCard(){
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
        const ydat = document.createElement("div");
        ydat.classList.add("ydat");
        const duration = document.createElement("p");
        duration.classList.add("time");
        duration.textContent = this.msToMinutesSeconds(this.track.duration_ms);
        const releaseYear = document.createElement("p");
        releaseYear.classList.add("year");
        releaseYear.textContent = this.dataRelease;
        ydat.appendChild(duration);
        ydat.appendChild(releaseYear);
        trackCard.appendChild(ydat);

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