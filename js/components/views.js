export function detectView() {

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
        console.log("Desktopview");
        console.log(sectionAlbums);

        sectionAlbums.style.display = "flex";
        sectionMedia.style.display = "block";
        sectionTrackList.style.display = "flex";
    }
   
}