import React from 'react';
import { useHistory } from 'react-router-dom'; 
// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function Card3Edit() {
    const history = useHistory();

    return (
        <div className="container">
            <div>
                <p>card_3: click here should show up the three card selection.<br></br>
                Make another page or make it pop up here. 
                </p>
                <p>Shi-en's and Shogun Shin's blade clashed! </p>
                <p>this part will need a state to type in the input.</p>
                <button>Update</button>
                <p>pressing the update should update the this story. </p>
                <input placeholder='Rewrite this part'></input>
                <button onClick={() => history.push('/card3Selected')}>
                    Go Back to single Epic selection 
                </button>
            </div>
        </div>
    );
}

export default Card3Edit;