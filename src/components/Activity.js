import React, { Component } from 'react';
import MyCarousel from './MyCarousel'

class Activity extends Component {
    render() {
        return (
            <div className="quizz">
                <h2>Sortie du 24 mars en partenariat avec le centre Leo Lagrange</h2>
                
                <MyCarousel imgs={[
                    "https://firebasestorage.googleapis.com/v0/b/art-n-joliette.appspot.com/o/mediation%2024%2Fsignal-2021-04-02-163235_005.jpeg?alt=media&token=9c5c06af-db1c-4984-9abe-588bb3f9e2ca",
                    "https://firebasestorage.googleapis.com/v0/b/art-n-joliette.appspot.com/o/mediation%2024%2Fsignal-2021-04-02-163235_006.jpeg?alt=media&token=ce27b6ed-8e83-4df7-b28e-57c944760990",

                    "https://firebasestorage.googleapis.com/v0/b/art-n-joliette.appspot.com/o/mediation%2024%2Fsignal-2021-04-02-163235_008.jpeg?alt=media&token=290f851b-46e2-486a-923b-f10493cd6188",
                    "https://firebasestorage.googleapis.com/v0/b/art-n-joliette.appspot.com/o/mediation%2024%2Fsignal-2021-04-02-163235_009.jpeg?alt=media&token=e32a6cd0-fcfc-4a3b-a8b5-e87d9a476567",

                    "https://firebasestorage.googleapis.com/v0/b/art-n-joliette.appspot.com/o/mediation%2024%2Fsignal-2021-04-02-163235_011.jpeg?alt=media&token=876f3c80-6165-4ab2-b64c-ccace2a404ac",
                    "https://firebasestorage.googleapis.com/v0/b/art-n-joliette.appspot.com/o/mediation%2024%2Fsignal-2021-04-02-163235_012.jpeg?alt=media&token=2a02d8af-9288-40f7-b37b-1d367169619a",

                    "https://firebasestorage.googleapis.com/v0/b/art-n-joliette.appspot.com/o/mediation%2024%2Fsignal-2021-04-02-163235_014.jpeg?alt=media&token=5866c14c-2515-4b38-a2c1-9f46819a858a",
                    "https://firebasestorage.googleapis.com/v0/b/art-n-joliette.appspot.com/o/mediation%2024%2Fsignal-2021-04-02-163235_015.jpeg?alt=media&token=74b5888b-ad9b-4fda-9a47-81e8bc2a008e",

                    "https://firebasestorage.googleapis.com/v0/b/art-n-joliette.appspot.com/o/mediation%2024%2Fsignal-2021-04-02-163235_016.jpeg?alt=media&token=edbdf450-f700-4feb-b79d-d7d59261cad3",
                    "https://firebasestorage.googleapis.com/v0/b/art-n-joliette.appspot.com/o/mediation%2024%2Fsignal-2021-04-02-163235_017.jpeg?alt=media&token=1f6b29f8-21fa-4ea0-8148-1fa7f0b1496b"
                ]}/>
            </div>
        );
    }
}

export default Activity;