import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <h3>Technology that made this project possible</h3>
        <p>JavaScript</p>
        <p>React</p>
        <p>Redux</p>
        <p>Saga</p>
        <p>Postico SQL</p>
      </div>
    </div>
  );
}

export default AboutPage;
