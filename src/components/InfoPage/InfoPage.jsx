import React from 'react';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <div className="container">
      <h3>Why Make this app?</h3>
      <p>Yugioh became a successful anime tv show that quickly took 
        United State by storm.  Soon every kid knew what the show was about 
        even if they never watched the show. Sadly, the monsters that made 
        the show fameous never got their spotlight.  Yugi Lores aims to 
        address that problems.  With some many decks and lores it is impossible
        for one person to write all the lores but with the help of many fans, 
        we can all contribute to the story and overall create a stronger fanbase. 
      </p>
    </div>
  );
}

export default InfoPage;
