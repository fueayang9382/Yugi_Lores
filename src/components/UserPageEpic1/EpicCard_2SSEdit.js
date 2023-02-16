import React from 'react';
//import { useHistory } from 'react-router-dom';
// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

//delete if not working
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
//delete if not working

function Card2Edit() {
    const history = useHistory();
    const image = useSelector((store) => store.imageReducer);
    const storyText = useSelector((store) => store.storyReducer);
    const dispatch = useDispatch();
   
    useEffect(() => {
        // console.log('11111122222222222',storyText);
        dispatch({
            type: 'SAGA/FETCH_IMAGE',
        });
        console.log('11111122222222222',image);
    }, []);

    return (
    <div className="container">
        {/* {image.map &&
            image.map((card2)=>(
            <div key={card2.id}>
                <div>
                    {card2.story_text}
                </div>
                   <div>
                    
                   </div>
                      <div>
                    
                      </div>
            </div>
        ))} */}
    </div>
    )
}



// //old baseMode
// import React from 'react';
// import { useHistory } from 'react-router-dom';
// // This is one of our simplest components
// // It doesn't have local state,
// // It doesn't dispatch any redux actions or display any part of redux state
// // or even care what the redux state is'

// function Card2Edit() {
//     const history = useHistory();

//     return (
//         <div className="container">
//             <div>
//                 <p>card_2: click here should show up the three card selection.<br></br>
//                 Make another page or make it pop up here.
//                 </p>
//                 <p>Hands tries to kill Shin but failed. </p>
//                 <p>this part will need a state to type in the input.</p>
//                 <p>pressing the update should update the this story. </p>
//                 <button>Update</button>
//                 <input placeholder='Rewrite this part'></input>
//                 <button onClick={() => history.push('/card2Selected')}>
//                     Go Back to single Epic selection
//                 </button>
//             </div>
//         </div>
//     );
// }

export default Card2Edit;
