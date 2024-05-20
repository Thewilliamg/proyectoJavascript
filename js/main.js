// import {TrackCardCreator,AlbumCardCreator} from "../components/creates.js"
import { loadAlbums } from "./components/load.js"
import { importationAlbum } from "./components/fetchAlbum.js";
import { Myframe } from "./components/myframe.js"
// import {importationSearch} from "../components/fetchSearch.js";
// import {searchInAlbums,searchInTracks} from "../components/search.js"

customElements.define("my-frame", Myframe)

//cargar el load
document.addEventListener('DOMContentLoaded', async() => {
    await loadAlbums();
});

console.log(loadAlbums())



//     createTrackCard(track, albumImage, dataRelease) {
//    }



// //para usarlas
// const albumCardCreator = new AlbumCardCreator(albumData);
// const albumCardsFragment = albumCardCreator.createAlbumCards();



