import React from 'react';
import { useHistory } from 'react-router-dom'; 
// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function Card1GaEdit() {
    const history = useHistory();

    return (
        <div className="container">
            <div>
                <p>card_1Ga: This is Card 1Ga.<br></br>
                Make another page or make it pop up here. 
                </p>
                <p>This is Card 1Ga.</p>
                <p>this part will need a state to type in the input.</p>
                <p>pressing the update should update the this story. </p>
                <button>Update</button>
                <input placeholder='Rewrite this part'></input>
                <button onClick={() => history.push('/card1GaSelected')}>
                    Go Back to single Epic selection 
                </button>
            </div>
        </div>
    );
}

export default Card1GaEdit;