import {artists} from '../data/data'

export const loadArtists = () => {

    return(dispatch) => {
        dispatch({ type: 'SHOW_ARTISTS', artists: artists })
    }

}
export const findArtistById = (id) => {
    return(dispatch) => {
        dispatch({ type: 'SHOW_ARTIST', artist: artists.find(artist => artist.id === parseInt(id)) })
    }
}