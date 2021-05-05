import React, { Component } from 'react';
import '../photos.css'

class History extends Component {
    render() {
        return (
            <div>
                <h2>Brève histoire du quartier de La Joliette</h2>
                <div className="description-card-content">
                    <div className="imgBox1">
                        <img style={{float: "left"}} src="https://firebasestorage.googleapis.com/v0/b/art-n-joliette.appspot.com/o/Histoire%2FCathedrale%20et%20quai%20de%20la%20Joliette%202020.jpg?alt=media&token=b76af183-dba4-4443-987a-ae4d82f6de33" alt=""/>
                    </div>
                    <div className="imgBox2">
                        <img style={{float: "left"}} src="https://firebasestorage.googleapis.com/v0/b/art-n-joliette.appspot.com/o/Histoire%2FRound%20Brush.png?alt=media&token=bc758a21-7807-4c48-85f1-b635a447ccdd" alt=""/>
                    </div>
        {/*         <audio src="https://firebasestorage.googleapis.com/v0/b/art-n-joliette.appspot.com/o/vocal%20histoire%20la%20Joliette.mp3?alt=media&token=752f9969-b031-468f-a365-6eaf5f8c7941" controls/>
*/}
                    <div className="description-card-sum">
                    
                        Si l’on en croit la légende locale, c'est l’empereur romain Jules César qui lui aurait donné son nom.
                        <br/><br/>
                        Mais, nous allons surtout nous intéresser à une époque plus récente : celle où la Joliette connaît un regain d’activité, c'est-à-dire au milieu des années 1800. En effet, cette époque est marquée par une grande transformation de la ville de Marseille, aussi bien sur les plans économique que technique, Marseille doit se doter au plus vite d’un nouveau port, plus grand, afin de garder une place mondiale importante dans le transport de marchandises par voies maritimes. Le « Vieux Port » que l’on connaît aujourd’hui était le seul de la ville. Cependant, avec les avancées technologiques et le développement du commerce international, celui-ci a dû être modifié. 
                        Ainsi, profitant de son ouverture sur la mer et de son emplacement idéal favorisant l’entrée de marchandises sur le territoire français, la Joliette devient le nouveau port de fret de Marseille. Afin de stocker les marchandises jusqu’au prochain transit la construction des docks devient essentielle ; le quartier va connaître une hausse considérable des fréquentations car des centaines de manutentionnaires vont y travailler jour et nuit pendant plusieurs décennies.
                        <br/><br/>
                        C’est à partir du début de la Seconde Guerre Mondiale que la Joliette va connaître un grand
                        bouleversement. Devant l’ampleur des conflits, les transports vont se faire de plus en plus rares, le port va avoir beaucoup de mal à rétablir son bon fonctionnement, notamment économique. Même après la Libération, il reste fragilisé par un retard important sur les autres grandes villes. Ce retard entraînera, en 1988, la fermeture des docks.
                        Les lieux ne resteront pas à l’arrêt longtemps. 
                        En 1995 est initié le projet EuroMéditerranée; on souhaite redorer l’image du quartier jusqu’ici plutôt populaire et habité par les ouvriers du port. La Joliette va changer de visage et devenir la vitrine d’une ville moderne axée sur la culture et le développement. En 2015 Marseille devient Capitale de la Culture, la ville investit et permet l’érection du Mucem et de la villa Méditerranée, hauts lieux culturels ouverts sur le nouveau port.Nouvelles infrastructures nouvelle identité : Marseille n’est plus uniquement ouvrière mais elle devient aussi artiste.
                        <br/><br/>
                        Cependant, cette image de carte postale est controversée. Dans les années 90 la modernisation du quartier a nécessité l’évacuation de populations pauvres vers les autres espaces de la ville. Ceux qui ne peuvent s’en aller voient les loyers augmenter de façon exorbitante pour leurs maigres revenus. Avec la fin des travaux la Joliette accueille une nouvelle population, plus aisée et moins présente à l'année.

                    </div>

                    {/*
                    
                    brush PNG Designed By 千图网 from <a href="https://pngtree.com/">Pngtree.com</a>*/}
                    {/*<div className="imgBox1">
                        <img src="https://firebasestorage.googleapis.com/v0/b/art-n-joliette.appspot.com/o/Histoire%2FCathedrale%20et%20quai%20de%20la%20Joliette%202020.jpg?alt=media&token=b76af183-dba4-4443-987a-ae4d82f6de33" alt=""/>
                    </div>
                    <div className="imgBox2">
                        <img src="https://firebasestorage.googleapis.com/v0/b/art-n-joliette.appspot.com/o/Histoire%2FRound%20Brush.png?alt=media&token=bc758a21-7807-4c48-85f1-b635a447ccdd" alt=""/>
                </div>*/}
                </div>
            </div>
        );
    }
}
export default History;