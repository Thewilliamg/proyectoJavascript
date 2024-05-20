import { importationAlbum } from "../components/fetchAlbum.js"
import { AlbumCardCreator } from "../components/creates.js"

export async function loadAlbums() {
    //albumes que se van a usar
    const albumSection = document.getElementById("albumSection");
    const albumIds = ["7AJPV0L05IyIBid97AvwVD", "7bpWEp24oHgUs08ImjakfU", "4yP0hdKOZPNshxUOjY0cZj", "4G2rJNhsKOE6iHgtUqZ0Ye", "0Lg1uZvI312TPqxNWShFXL", "0JzdeLGqbDXPBlDbV4Y0c3", "2Auw0pTT6EcQdvHNimhLQI"];
    // try{
        const data = await importationAlbum(albumIds);
        if (data) {
            const albumCardCreator = new AlbumCardCreator(data);
            const cardsFragment = albumCardCreator.createCard();
            albumSection.querySelector(".album_list").appendChild(cardsFragment);
        } else {
            console.error(`No se pudo obtener el álbum con los ID: ${albumIds}`);
        }
    // } catch {
    //     console.error(`Error al cargar los álbumes.`);
    // }
    //hacer click en el primero
    // if (window.innerWidth > 900) {
    //     let firstAlbum = document.querySelectorAll('.card')[0];
    //     firstAlbum.click()
    //     // console.log(firstAlbum);
    // }
}