// import {TrackCardCreator,AlbumCardCreator} from "./components/creates.js"
import { loadAlbums } from "./components/load.js"
import { importationAlbum } from "./components/fetchAlbum.js";
import { Myframe } from "./components/myframe.js"
// import {importationSearch} from "../components/fetchSearch.js";
import { putTrackRecommendation } from "./components/search.js"

customElements.define("my-frame", Myframe)


document.addEventListener('DOMContentLoaded', async () => {
    //Loading Load-function
    await loadAlbums();
    //loading track recommendation
    await putTrackRecommendation();
    //searcher album
    const searchBar = document.getElementById('search-bar');
    searchBar.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const cards = document.querySelectorAll('.card');

        cards.forEach(card => {
            const title = card.querySelector('p').textContent.toLowerCase();
            const artist = card.querySelector('small').textContent.toLowerCase();

            if (title.includes(searchTerm) || artist.includes(searchTerm)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });
    //search track in right view 
    const searchtrack = document.getElementById('search-track');
    searchtrack.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const tCards = document.querySelectorAll('.cardOftracks');

        tCards.forEach(card => {
            const search_b = card.querySelector('div');
            const title = search_b.querySelector('b').textContent.toLowerCase();

            if (title.includes(searchTerm)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });
    //views

    const btnAlbumView = document.querySelector(".album__view");
    const btnTrackView = document.querySelector(".track__view");
    const btnMediaView = document.querySelector(".media__view");
    const sectionAlbums = document.querySelector(".left");
    const sectionMedia = document.querySelector(".center");
    const sectionTrackList = document.querySelector(".right");

    btnAlbumView.addEventListener("click", function () {
        sectionAlbums.style.display = "flex";
        sectionMedia.style.display = "none";
        sectionTrackList.style.display = "none";
    });

    btnTrackView.addEventListener("click", function () {
        sectionAlbums.style.display = "none";
        sectionMedia.style.display = "none";
        sectionTrackList.style.display = "flex";
    });
    btnMediaView.addEventListener("click", function () {
        sectionAlbums.style.display = "none";
        sectionMedia.style.display = "flex";
        sectionTrackList.style.display = "none";
    });


    //
    if (window.innerWidth > 700) {
        let firstAlbum = document.querySelector('.card');
        firstAlbum.click();
        // console.log(firstAlbum);
    } else { console.log(window.innerWidth) }
    function detectView() {

        const sectionAlbums = document.querySelector(".left");
        const sectionMedia = document.querySelector(".center");
        const sectionTrackList = document.querySelector(".right");
       
        if (window.innerWidth <= 900) {
    
            // console.log("Mobileview");
            sectionAlbums.style.display = "flex";
            sectionMedia.style.display = "none";
            sectionTrackList.style.display = "none";
            btnAlbumView.click();
        }
        else {
    
    
            sectionAlbums.style.display = "flex";
            sectionMedia.style.display = "block";
            sectionTrackList.style.display = "flex";
        }
       
    }
    detectView()
    //
});

