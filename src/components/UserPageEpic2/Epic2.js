import React from 'react';
import { useHistory } from 'react-router-dom';
// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function Epic2() {
    const history = useHistory();
    return (
        <div className="container">
            <div>
                <p>
                    This is where all of GaGaGiGo will epics will
                    unfold.{' '}
                </p>
                <button onClick={() => history.push('/user')}>Go Back user's page</button>
            </div>
        </div>
    );
}

export default Epic2;
