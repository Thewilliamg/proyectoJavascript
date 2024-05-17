import {importationAlbum} from "../components/fetchAlbum"
import {createAlbumCard} from "../js/main"

export async function loadAlbums() {
    const albumSection = document.getElementById("albumSection");
    const albumIds = ["7AJPV0L05IyIBid97AvwVD", "4Hjqdhj5rh816i1dfcUEaM", "4yP0hdKOZPNshxUOjY0cZj", "4G2rJNhsKOE6iHgtUqZ0Ye", "0Lg1uZvI312TPqxNWShFXL", "0JzdeLGqbDXPBlDbV4Y0c3", "2Auw0pTT6EcQdvHNimhLQI"];


    const albumData = await getAlbumById(albumIds);
    if (albumData) {
        const card = createAlbumCard(albumData);
        albumSection.querySelector(".cardsbox").appendChild(card);
    } else {
        console.error(`No se pudo obtener el álbum con el ID: ${albumIds}`);
    }

    if(window.innerWidth > 900){
        let firstAlbum = document.querySelectorAll('.card')[0];
        firstAlbum.click()
        console.log(firstAlbum);
    }


}