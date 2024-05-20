export function searchInAlbums(searched) {
    const cards = document.querySelectorAll('.cardsbox .card');
    cards.forEach(card => {
        const name = card.querySelector('.albumName').textContent.toLowerCase();
        if (name.includes(searched.toLowerCase())) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

export function searchInTracks(searchTerm) {
    const tracks = document.querySelectorAll('.tracks__container .track__card');
    tracks.forEach(track => {
        const name = track.querySelector('.aname3').textContent.toLowerCase();
        if (name.includes(searchTerm.toLowerCase())) {
            track.style.display = 'flex';
        } else {
            track.style.display = 'none';
        }
    });
}