export const getAlbumById = async (id) => {
    const url = `https://spotify23.p.rapidapi.com/albums/?ids=${id}`;
    const options = {
        method: 'GET',
        params: {
            ids: `${id}`
        },
        headers: {
            'X-RapidAPI-Key': '1095f8b652msh95f265095f02f92p1dd4c1jsncde0e9ba16cf',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    };
    try {
        const res = await fetch(url, options);
        const data = await res.json();
        return data.albums
    } catch (error) {
        console.error('Error al obtener el álbum:', error);
        return null;
    }
};
export const getTrackRecommendations = async () => {
    const url = 'https://spotify23.p.rapidapi.com/recommendations/?limit=20&seed_tracks=0c6xIDDpzE81m2q797ordA&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry';
    const options = {
        method: 'GET',
        headers: {
            // 'X-RapidAPI-Key': '1095f8b652msh95f265095f02f92p1dd4c1jsncde0e9ba16cf',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    };

    try {
        const res = await fetch(url, options);
        const data = await res.json();
        return data.tracks
    } catch (error) {
        console.error(error);
        return null
    }
}