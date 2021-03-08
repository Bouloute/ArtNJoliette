const artReducers = (
    state = { 
        arts: [],
        art: {}
    }, action) => {
        
    switch(action.type) {
        case 'SHOW_ARTS':
            return {
                ...state,
                arts: action.arts
            }
        case 'SHOW_ART':
            return {
                ...state,
                art: action.art
            }
        default:
            return state;
        }
    }

export default artReducers;