import { importTrackRecommendations } from "./fetchAlbum.js"
import { RecommendedTrackCardCreator } from "./creates.js"

export async function putTrackRecommendation() {
    let trackData = await importTrackRecommendations();
    const tracksRecommendation = document.querySelector(".track_recommended_list");
    tracksRecommendation.innerHTML = "";
    trackData.forEach(track => {
        const albumImage = track.album.images[0].url;
        let Date = track.album.release_date.split("-");
        const dataRelease = Date[0];

        const creatortrackCard = new RecommendedTrackCardCreator(track, albumImage, dataRelease);
        const trackCard = creatortrackCard.createCard();
        tracksRecommendation.appendChild(trackCard);
    });
}
