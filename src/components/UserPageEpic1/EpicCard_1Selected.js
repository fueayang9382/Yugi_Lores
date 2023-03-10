import React from 'react';
import { useHistory } from 'react-router-dom'; 
// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function Card1Selected() {
    const history = useHistory();

    return (
        <div className="container">
            <div>
                <p>card_1: Shi-en confronts his father's killer.</p>
                <button onClick={() => history.push('/Card1Edit')}>Edit this post</button>
                <button>Delete this Six Samurai EPIC</button>
                <button onClick={() => history.push('/epic1')}>
                    Go Back Six Samurai Epic 
                </button>
            </div>
        </div>
    );
}

export default Card1Selected;