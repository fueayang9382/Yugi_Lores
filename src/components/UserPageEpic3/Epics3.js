import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function Epic3() {
    return (
        <div className="container">
            <div>
                <p>
                    This is where all of the Warrior Dai Grepher will epics will
                    unfold.{' '}
                </p>
                <button>Go Back user's page</button>
            </div>
        </div>
    );
}

export default Epic3;