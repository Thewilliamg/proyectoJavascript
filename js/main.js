
import { loadAlbums } from "./components/load.js"
import { Myframe } from "./components/myframe.js"
// import { detectView } from "./components/views.js";
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
    // detectView()

    //
    if (window.innerWidth > 600) {
        let firstAlbum = document.querySelector('.card');
        firstAlbum.click();
        // console.log(firstAlbum);
    } else { console.log(window.innerWidth) }

});

