import React from 'react';
import { useHistory } from 'react-router-dom'; 
// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function Card1GaSelected() {
    const history = useHistory();

    return (
        <div className="container">
            <div>
                <p>Card_1Ga: This young evildoer used to have an evil heart, but by meeting a special person, he discovered justice. </p>
                <button onClick={() => history.push('/Card1GaEdit')}>Edit this post</button>
                <button>Delete this GaGaGiGo EPIC</button>
                <button onClick={() => history.push('/epic2')}>
                    Go Back Six Samurai Epic 
                </button>
            </div>
        </div>
    );
}

export default Card1GaSelected;