import { importationAlbum } from "../components/fetchAlbum.js"
import { AlbumCardCreator } from "../components/creates.js"

export async function loadAlbums() {
    //albumes que se van a usar
    const albumSection = document.getElementById("albumSection");
    const albumIds = ["7JeWY0pvC27pCgn5eiSeV6", "7bpWEp24oHgUs08ImjakfU", "7KHNK7l8peO0t95I1v7BmP", "0IkprxBZTCQhSry1AsDxcb", "3i4nU0OIi7gMmXDEhG9ZRt", "3cfAM8b8KqJRoIzt3zLKqw", "6XSSTHK08ICCZdS5AEq95R", "3Go9Lvj1m9UOzidlfDOFVA","7JlCbNWZszAdVKZdtHFQ5p"];
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

}