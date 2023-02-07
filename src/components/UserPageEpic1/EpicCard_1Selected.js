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
                <p>
                    User's six samurai story will appear here if they created one.<br></br>
                    A get.route will be placed here to fetch all fixed stories<br></br>
                    Each picture/text will have a onClick to bring user to edit mode. 
                </p>
                <p>card_1: Shi-en confronts his father's killer.</p>
                <button>Edit this post</button>
                <button>Delete this Six Samurai EPIC</button>
                <p>the^^ Add button will add picture to the epic </p>
                <button onClick={() => history.push('/epic1')}>
                    Go Back Six Samurai Epic 
                </button>
            </div>
        </div>
    );
}

export default Card1Selected;