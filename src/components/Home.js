import riddle from '../png/camera.png';
import history from '../png/history.png';
import artists from '../png/color-palette.png';
import activity from '../png/camera.png';

import '../Home.css';
import Card from './Card'
import React from 'react';

const Home = () => {
    return (
        <div className="Home">
            <div className="bandeau">
                <p> Etudiant.e.s en licence professionnelle médiation
                    culturelle, nous vous proposons une balade interactive de La Joliette à Marseille.
                    Cliquez sur les différents onglets ci-dessous pour déceler, grâce à nos jeux, les
                    œuvres urbaines du quartier mais également son histoire et celles des artistes
                    impliqués.<br/>
                    En espérant vous voir nombreux arpenter les rues de La Joliette à la conquête de
                    ses secrets !
                </p>
            </div>
            
            <div className="cards">
                <Card image={riddle} title="Jeux" url="/enigmas"/>
                <Card image={history} title="Point Histoire" url="/history"/>
                <Card image={artists} title="Ateliers d'Artistes" url="/artists"/>
                <Card image={activity} title="Médiations" url="/activity"/>
            </div>
            
            <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        
        </div>
    );
};

export default Home;