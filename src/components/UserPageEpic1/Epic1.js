import React from 'react';
import { useHistory } from 'react-router-dom'; //TOU's work
// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function Epic1() {
    const history = useHistory();//Tou's work

    return (
        <div className="container">
            <div>
                <p>
                    User's six samurai story will appear here if they created one.<br></br>
                    A get.route will be placed here to fetch all fixed stories<br></br>
                    Each picture/text will have a onClick to bring user to edit mode. 
                </p>
                <p onClick={() => history.push('/card1Selected')}>card_1: Shi-en confronts his father's killer.</p>
                <p onClick={() => history.push('/card2Selected')}>card_2: Hands tries to kill Shin but failed.</p>
                <p>card_3: Shi-en's and Shogun Shin's blade clashed! </p>
                <button>ADD more to Six Samurai Epic</button>
                <button>DElETE ALL SIX SAMURAI EPIC</button>
                <p>the^^ Add button will add picture to the epic </p>
                <button onClick={() => history.push('/user')}>
                    Go Back user's page
                </button>
            </div>
        </div>
    );
}

export default Epic1;
