export const importationAlbum = async() => {
    const url = `https://spotify23.p.rapidapi.com/albums/?ids=${uri}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1095f8b652msh95f265095f02f92p1dd4c1jsncde0e9ba16cf',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        },
        params: {
            ids: `${uri}`
        }
    };
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(result)
        return data.albums
    } catch (error) {
        console.error('Error al importar el album elegido',error);
    }
}


export const importationAlbumTracksById = async() => {
    // const url = 'https://spotify23.p.rapidapi.com/album_tracks/?id=3IBcauSj5M2A6lTeffJzdv&offset=0&limit=300';
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
        console.error('Error para obtener tracks',error);
    }
}

export const importTrackRecommendations = async () => {
    const url = 'https://spotify23.p.rapidapi.com/recommendations/?limit=20&seed_tracks=0c6xIDDpzE81m2q797ordA&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry';
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1095f8b652msh95f265095f02f92p1dd4c1jsncde0e9ba16cf',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const data = await response.json();
	console.log(result);
    return data.tracks
} catch (error) {
	console.error('Error al traer los recomendados',error);
    return null
}
}