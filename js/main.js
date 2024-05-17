import {TrackCardCreator} from "../components/creates.js"
import {AlbumLoader} from "../components/load.js"
import {importationAlbum, importationAlbumTracksById} from "../components/fetchAlbum.js";
import {myframe} from "../components/myframe.js"
import {importationSearch} from "../components/fetchSearch.js";
import {createTrackCard} from "../components/creates.js"
import {searchInAlbums,searchInTracks} from "../components/search.js"


customElements.define("my-frame",myframe)


// importationAlbumTracksById()
importationAlbum();
console.log(await importationAlbum())


export class AlbumCardCreator {
    constructor(albumData){
        this.albumData = albumData;
        this.fragment = document.createDocumentFragment();
    }

    createCard() {
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
        // return card;
    }

    async handleAlbumClick(albumId){
        const albumFrame = document.querySelector("my-frame");
        albumFrame.setAttribute("uri",`spotify:album:${albumId}`);

        if (this.albumData) {
            const trackslist = document.querySelector(".tracks_list")
            trackslist.innerHTML = "";
            const album = this.albumData.find(album => album.id === albumId);
            if (album) {
            const albumImage =this.albumData[0].images[0].url;//asumiendo que tiene almenos una imagen
            const dataRelease = this.albumData[0].release_date.split("-")[0];
            for (const track of this.albumData[0].tracks.items){
                const trackCard = createTrackCard(track,albumImage,dataRelease);
                trackslist.appendChild(trackCard);    
            }
            } else {
                console.error(`No se encuentra el Album del album ${this.albumId}`);
            }
        } else {
            console.error(`No se pudo obtener la lista de canciones del álbum con ID ${albumId}`);
        }
    }

    //     createTrackCard(track, albumImage, dataRelease) {
    //    }

    createAlbumCards() {
        this.albumData.forEach(album => {
            const card = this.createCard(album);
            this.fragment.appendChild(card);
        });
        return this.fragment;
    }
}

// //para usarlas
// const albumData = [...]; // Tu array de datos de álbumes
// const albumCardCreator = new AlbumCardCreator(albumData);
// const albumCardsFragment = albumCardCreator.createAlbumCards();





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