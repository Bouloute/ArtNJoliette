import {arts} from '../data/data'

export const loadArts = () => {

    return(dispatch) => {
        dispatch({ type: 'SHOW_ARTS', arts: arts })
    }

}

export const findArtById = (id) => {
    return(dispatch) => {
        dispatch({ type: 'SHOW_ART', art: arts.find(art => art.id === parseInt(id)) })
    }

}