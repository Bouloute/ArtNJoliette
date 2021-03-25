const artistReducers = (
    state = { 
        artists: [],
        artist: {}
    }, action) => {
        
    switch(action.type) {
        case 'SHOW_ARTISTS':
            return {
                ...state,
                artists: action.artists
            }
        case 'SHOW_ARTIST':
            return {
                ...state,
                artist: action.artist
            }
        default:
            return state;
        }
    }

export default artistReducers;