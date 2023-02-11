import React from 'react';
import { useHistory } from 'react-router-dom'; 
// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function Card1DaiEdit() {
    const history = useHistory();

    return (
        <div className="container">
            <div>
                <p>card_1Dai </p>
                <p>This should be Card 1 Warrior Dai Grepher Description 1 boom </p>
                <p>this part will need a state to type in the input.</p>
                <button>Update</button>
                <p>pressing the update should update the this story. </p>
                <input placeholder='Rewrite this part'></input>
                <button onClick={() => history.push('/Card1DaiSelected')}>
                    Go Back to single Epic selection 
                </button>
            </div>
        </div>
    );
}

export default Card1DaiEdit;