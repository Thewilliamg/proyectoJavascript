export const importationAlbum = async() => {
    // const url = 'https://spotify23.p.rapidapi.com/albums/?ids=3IBcauSj5M2A6lTeffJzdv';
    const url = '../db/albumTrack.json'
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1095f8b652msh95f265095f02f92p1dd4c1jsncde0e9ba16cf',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    };
    try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    } catch (error) {
        console.error(error);
    }
}
export const importationAlbumTracks = async() => {
    const url = 'https://spotify23.p.rapidapi.com/album_tracks/?id=3IBcauSj5M2A6lTeffJzdv&offset=0&limit=300';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1095f8b652msh95f265095f02f92p1dd4c1jsncde0e9ba16cf',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}