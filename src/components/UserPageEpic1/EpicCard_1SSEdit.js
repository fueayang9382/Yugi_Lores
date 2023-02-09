import React from 'react';
import { useHistory } from 'react-router-dom'; 
// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function Card1Edit() {
    const history = useHistory();

    return (
        <div className="container">
            <div>
                <p>card_1: click here should show up the three card selection.<br></br>
                Make another page or make it pop up here. 
                </p>
                <p>Shi-en confronts his father's killer </p>
                <p>this part will need a state to type in the input.</p>
                <button>Update</button>
                <p>pressing the update should update the this story. </p>
                <input placeholder='Rewrite this part'></input>
                <button onClick={() => history.push('/card1Selected')}>
                    Go Back to single Epic selection 
                </button>
            </div>
        </div>
    );
}

export default Card1Edit;