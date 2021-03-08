import riddle from '../png/003-location.png';
import history from '../png/004-castle.png';
import artists from '../png/005-artist.png';

import '../Home.css';
import Card from './Card'
import React from 'react';

const Home = () => {
    return (
        <div className="Home">
            <div className="bandeau">Bandeau explicatif</div>
            
            <div className="cards">
                <Card image={riddle} title="Jeux" url="/enigmas"/>
                <Card image={history} title="Point Histoire" url="/history"/>
                <Card image={artists} title="Ateliers Artistes" url="/artists"/>
            </div>
            
            <div>Icons made by <a href="https://www.flaticon.com/authors/surang" title="surang">surang</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            <div>Icons made by <a href="https://www.flaticon.com/authors/nikita-golubev" title="Nikita Golubev">Nikita Golubev</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        
        </div>
    );
};

export default Home;