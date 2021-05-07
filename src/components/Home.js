import puzzle from '../png/puzzle.png';
import history from '../png/history.png';
import artists from '../png/color-palette.png';
import activity from '../png/camera.png';

import puzzle_colour from '../png/puzzle-colour.png';
import history_colour from '../png/history-colour.png';
import artists_colour from '../png/color-palette-colour.png';
import activity_colour from '../png/camera-colour.png';

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
                <Card image={history} image_colour={history_colour} title="Point Histoire" url="/history"/>
                <Card image={puzzle} image_colour={puzzle_colour} title="Jeux" url="/enigmas"/>
                <Card image={artists} image_colour={artists_colour} title="Ateliers d'Artistes" url="/artists"/>
                <Card image={activity} image_colour={activity_colour} title="Photos" url="/activity"/>
            </div>
            
            <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            <a href='https://pngtree.com/so/brush-clipart'>brush clipart png from pngtree.com</a>

        </div>
    );
};

export default Home;