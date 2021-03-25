const artistReducers = (
    state = { 
        artist: {}
    }, action) => {
        
    switch(action.type) {
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