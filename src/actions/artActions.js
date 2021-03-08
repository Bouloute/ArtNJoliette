export const loadArts = () => {

    return(dispatch) => {
        fetch('http://localhost:4000/arts')
            .then(response => {
                return response.json()
            }).then(responseJSON => {
                dispatch({ type: 'SHOW_ARTS', arts: responseJSON })
            })
    }

}

export const findArtById = (id) => {
    const url = 'http://localhost:4000/arts/' + id

    return(dispatch) => {
        fetch(url)
            .then(response => {
                return response.json()
            }).then(responseJSON => {
                dispatch({ type: 'SHOW_ART', art: responseJSON })
            }).catch(error => {
                console.log(error)
            })
    }

}