import React from 'react';
import { useHistory } from 'react-router-dom'; 
// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function Card1DaiSelected() {
    const history = useHistory();

    return (
        <div className="container">
            <div>
                <p>card_1Dai: Normale Warrior Dai Grepher </p>
                <button onClick={() => history.push('/smfl')}>Edit this post</button>
                <button>Delete this GaGaGiGo EPIC</button>
                <button onClick={() => history.push('/user')}>
                    Go Back to Warrior Dai Grepher Epic 
                </button>
            </div>
        </div>
    );
}

export default Card1DaiSelected;