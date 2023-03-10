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
        <p>HTML/CSS</p>
        <p>JavaScript</p>
        <p>React JS</p>
        <p>Redux</p>
        <p>Saga</p>
        <p>Postico SQL</p>
        <p>PostMan</p>
      </div>
    </div>
  );
}

export default AboutPage;
