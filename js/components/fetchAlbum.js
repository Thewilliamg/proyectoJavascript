export async function importationAlbum(id) {
    const url = `https://spotify23.p.rapidapi.com/albums/?ids=${id}`;
    const options = {
        method: 'GET',
        params: {
            ids: `${id}`
        },
        headers: {
            'X-RapidAPI-Key': '0fc79fdc0cmsh57dbf36c1563e45p1881dfjsn7863f62e5710',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        // console.log(data.albums)
        return data.albums
    } catch (error) {
        console.error(`Error Wal importar el album ${id}`, error);
    }
}

export const importTrackRecommendations = async () => {
    const url = 'https://spotify23.p.rapidapi.com/recommendations/?limit=20&seed_tracks=0c6xIDDpzE81m2q797ordA&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=rock%2Clatin%2Cpop';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0fc79fdc0cmsh57dbf36c1563e45p1881dfjsn7863f62e5710',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        // console.log(data.tracks);
        return data.tracks
    } catch (error) {
        console.error('Error al traer los recomendados', error);
        return null
    }
}