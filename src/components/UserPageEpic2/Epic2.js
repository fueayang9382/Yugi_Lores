import React from 'react';
import { useHistory } from 'react-router-dom';//TOU's work
// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function Epic2() {
    const history = useHistory();//TOU's work 

    return (
        <div className="container">
            <div>
                <p>
                    This is where all of GaGaGiGo will epics will
                    unfold.
                </p>
                <p onClick={() => history.push('/card1GaSelected')}>Card_1Ga: This young evildoer used to have an evil heart, but by meeting a special person, he discovered justice.</p>
                <p>Card_2Ga: In order to fight tremendous evil, he gained formidable power through body reconstruction, but lost his heart and his redemption.</p>
                <p>Card_3Ga: His soul long since collapsed, his body recklessly continues onward, driven by a lust for more power. He no longer resembles his former self....</p>
                <button onClick={() => history.push('/user')}>Go Back user's page</button>
            </div>
        </div>
    );
}

export default Epic2;
