import React from 'react';
import { useHistory } from 'react-router-dom'; 
// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function Card2GaSelected() {
    const history = useHistory();

    return (
        <div className="container">
            <div>
                <p>Card_2Ga: Card 2 Description 2. </p>
                <button onClick={() => history.push('/Card2GaEdit')}>Edit this post</button>
                <button>Delete this GaGaGiGo EPIC</button>
                <button onClick={() => history.push('/epic2')}>
                    Go Back to GaGaGiGo Epic 
                </button>
            </div>
        </div>
    );
}

export default Card2GaSelected;