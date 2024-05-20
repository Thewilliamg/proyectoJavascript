// import {
//     getAlbumById,
//     getTrackRecommendations
// } from './services/spotify.js';

import { Myframe , detectView, loadAlbums, putTrackRecommendation} from "./helper2.js";
import { searchInAlbums } from "./modules/albumsLogic2.js";
import { searchInTracks } from "./modules/trackLogic2.js";

loadAlbums();

window.onresize = detectView;

document.querySelector('.section__1 .search-header__input').addEventListener('input', function (event) {
    searchInAlbums(event.target.value);
});

customElements.define("my-frame", Myframe);

document.querySelector('.section__3 .search-header__input').addEventListener('input', function (event) {
    searchInTracks(event.target.value);
});



document.addEventListener("DOMContentLoaded",async ()=> {

    console.log("content loaded");

    const btnAlbumView = document.querySelector(".album__view");
    const btnTrackView = document.querySelector(".track__view");
    const btnMediaView = document.querySelector(".media__view");

    const sectionAlbums = document.querySelector(".section__1");
    const sectionMedia = document.querySelector(".section__2");
    const sectionTrackList = document.querySelector(".section__3");

    btnAlbumView.addEventListener("click", function () {
        sectionAlbums.style.display = "flex";
        sectionMedia.style.display = "none";
        sectionTrackList.style.display = "none";
        console.log("dsfasfasdfasdf");
    });

    btnTrackView.addEventListener("click", function () {
        sectionAlbums.style.display = "none";
        sectionMedia.style.display = "none";
        sectionTrackList.style.display = "flex";
        console.log("dsfasfasdfasdf");
    });

    btnMediaView.addEventListener("click", function () {
        sectionAlbums.style.display = "none";
        sectionMedia.style.display = "flex";
        sectionTrackList.style.display = "none";
        console.log("dsfasfasdfasdf");
    });

    await putTrackRecommendation()
});