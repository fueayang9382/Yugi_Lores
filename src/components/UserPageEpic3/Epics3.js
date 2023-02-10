import React from 'react';
import { useHistory } from 'react-router-dom';
// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function Epic3() {
    const history = useHistory();
    
    return (
        <div className="container">
            <div>
                <p>card_1Dai: Normale Warrior Dai Grepher </p>
                <p>card_2Dai: Evil Warrior Dai Grepher  who chose evil. </p>
                <p>card_3Dai: Light Warrior Dai Grepher who chose to walk on the walk of light. </p>
                <button onClick={() => history.push('/user')}>Go Back user's page</button>
                {/* some how this home button works why? not hook up */}
            </div>
        </div>
    );
}

export default Epic3;