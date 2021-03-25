import { combineReducers } from 'redux';
import artReducers from './artReducers';
import artistReducers from './artistReducers';

export default combineReducers({
    artReducers: artReducers,
    artistReducers: artistReducers
});