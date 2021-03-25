import {artists} from '../data/arts'

export const findArtistById = (id) => {
    return(dispatch) => {
        dispatch({ type: 'SHOW_ARTIST', artist: artists.find(artist => artist.id == id) })
    }
}