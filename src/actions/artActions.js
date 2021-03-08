import {arts} from '../data/arts'

export const loadArts = () => {

    return(dispatch) => {
        /*fetch('http://localhost:4000/arts')
            .then(response => {
                return response.json()
            }).then(responseJSON => {
                dispatch({ type: 'SHOW_ARTS', arts: responseJSON })
            })*/
            
            dispatch({ type: 'SHOW_ARTS', arts: arts })
            /*console.log("Showed arts ")
            console.log(arts)
            debugger*/
    }

}

export const findArtById = (id) => {
    //const url = 'http://localhost:4000/arts/' + id

    return(dispatch) => {
        /*fetch(url)
            .then(response => {
                return response.json()
            }).then(responseJSON => {
                dispatch({ type: 'SHOW_ART', art: responseJSON })
            }).catch(error => {
                console.log(error)
            })*/
            
            dispatch({ type: 'SHOW_ART', art: arts.find(art => art.id == id) })
            /* console.log("Showed art ")
            console.log(arts)
            debugger*/

    }

}