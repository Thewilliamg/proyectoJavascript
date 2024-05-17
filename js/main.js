import {
    importationAlbum,
    importationAlbumTracksById
} from "../components/fetchAlbum.js";
import {importationSearch} from "../components/fetchSearch.js";
import {createTrackCard} from "../components/creates.js"


class myframe extends HTMLElement{
    id
    constructor(id){
        super();
        this.attachShadow({mode: "open"});
    }
    connectedCallback(){
        this.shadowRoot.innerHTML = /*html*/`
            <iframe class="spotify-iframe" width="100%" height="100%" src="https://open.spotify.com/embed/album/${this.id}" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        `
    }
    static get observedAttributes(){
        return ["uri"];
    }
    attributeChangedCallback(name,old,now){
        let[nameUri, album, id] = now.split(":")
        this.id = id;
    }
}
customElements.define("my-frame",myframe)


// importationAlbumTracksById()
importationAlbum();
console.log(await importationAlbum())


export class AlbumCardCreator {
    constructor(albumData){
        this.albumData = albumData;
        this.fragment = document.createDocumentFragment();
    }

    createCards() {
        this.albumData.forEach(album => {
            const card = document.createElement("div");
            card.classList.add("card");

            const img = document.createElement("img")
            img.src = album.images[0].url;
            img.alt = album.name;

            const name = document.createElement("p");
            name.classList.add("albumName");
            name.textContent = album.name;

            const artist = document.createElement("p");
            artist.classList.add("artist");
            let parseDate = album.release_date.split("-");
            artist.textContent = `${album.artist[0].name} -${parseDate[0]}`; 
            
            card.appendChild(img);
            card.appendChild(name);
            card.appendChild(artist);
            
            card.dataset.albumId = album.id;
            card.addEventListener("click", () => this.handleAlbumClick(card.dataset.albumId))
            
            this.fragment.appendChild(card)
        });
        return this.fragment;
    }

    async handleAlbumClick(albumId){
        const albumFrame = document.querySelector("my-frame");
        albumFrame.setAttribute("uri",`spotify:album:${albumId}`);

        if (this.albumData) {
            const trackslist = document.querySelector(".tracks_list")
            trackslist.innerHTML = "";
            const albumImage =this.albumData[0].images[0].url;//asumiendo que tiene almenos una imagen
            const dataRelease = this.albumData[0].release_date.split("-")[0];
            for (const track of this.albumData[0].tracks.items){
                const trackCard = createTrackCard(track,albumImage,dataRelease);
                trackslist.appendChild(trackCard);    
            }
        } else {
            console.error(`No se encuentra la lista de canciones del album ${this.albumData[0].name}`);
        }
    }
    createTrackCard(track,albumImage,dataRelease){

    }
}

//para usarl la clase anterior
import {AlbumCardCreator} from '';

const albumData = obtenerDatosDelAlbum();
const creator = new AlbumCardCreator(albumData);
const cardFragment = creator.createCards();





// export class AlbumSearcher{
//     constructor(searchAlbum){
//         this.searchAlbum = searchAlbum.toLowerCase();
//         this.cards = document.querySelectorAll('.album_list')
//     }
//     search(){
//         this.cards.forEach( card => {
//             const nameCardAlbum = card.querySelector('')//por continuar
//         })
//     }
// }