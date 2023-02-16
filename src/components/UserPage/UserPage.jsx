import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { ParameterStatusMessage } from 'pg-protocol/dist/messages';

function UserPage() {
    // this component doesn't do much to start, just renders some user reducer info to the DOM
    const user = useSelector((store) => store.user);
    const history = useHistory();
    const image = useSelector((store) => store.imageReducer);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch({
            type: 'SAGA/FETCH_IMAGE',
        });
        console.log(image);
    }, []);

    //working  from shong
    // const handleStoryPage = (x) => {
    //     history.push(`/epic1/${x.id}`)
    //     console.log('*******this is the images ID', x.id);
    // }

    //shong: make another saga call
    const handleStoryPage = (x) => {
        dispatch({
            type: 'SAGA/FETCH_ID_TEXT',
            payload: x.id 
        });
        history.push(`/epic1/${x.id}`)
        console.log('*******this is the images ID', x.id);
    }

    return (
        <>
            {image.map && image.map((x)=>
                <div key={x.id} onClick={()=> handleStoryPage(x)}>{x.title}</div>
            )}
        </>
    );
}

// this allows us to use <App /> in index.js
export default UserPage;
















// {/* <div className="container">
//                 <h2>Welcome, {user.username}!</h2>
//                 <p>This is SOLO + this it make solo more than just CRUD</p>
//                 <p>Your ID is: {user.id}</p>
//                 <LogOutButton className="btn" />
//                 <div>
//                     <div onClick={handleStoryPage }>
//                         <h3><b>THE SIX SAMURAI </b></h3>
//                         {/* // <img src=/> */}
//                     </div>
//                     <div>
//                     <h3><b>WARRIOR DAI GREPHER</b></h3>
//                         {/* <img/> */}
//                     </div>
//                     <div>
//                     <h3><b>GAGAGIGO</b></h3>
//                         {/* <img/> */}
//                     </div>
//                 </div>
//             </div> */}

//old: bringback if the new doesnt work

// import React from 'react';
// import LogOutButton from '../LogOutButton/LogOutButton';
// import { useSelector, useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';
// import { useEffect } from 'react';

// function UserPage() {
//     // this component doesn't do much to start, just renders some user reducer info to the DOM
//     const user = useSelector((store) => store.user);
//     const history = useHistory();
//     const image = useSelector((store) => store.imageReducer);
//     const storyText = useSelector((store) => store.storyReducer);
//     const dispatch = useDispatch();
//     console.log(image);
//     useEffect(() => {
//         dispatch({
//             type: 'SAGA/FETCH_IMAGE',
//         });
//     }, []);

//     return (
//         <>
//             <div className="container">
//                 <h2>Welcome, {user.username}!</h2>
//                 <p>This is SOLO + this it make solo more than just CRUD</p>
//                 <p>Your ID is: {user.id}</p>
//                 <LogOutButton className="btn" />
//                 <div>
//                     {image.map &&
//                         image.map((image) => (
//                             <table key={image.id}>
//                                 <tbody>
//                                     <img
//                                         onClick={() => history.push('/epic1')}
//                                         // key={image.id}
//                                         src={image.card_1}
//                                     />
//                                     {/* <img
//                                         onClick={() =>
//                                             history.push('/epic1')
//                                         }
//                                         // key={image.id}
//                                         src={image.card_2}
//                                     />
//                                     <img
//                                         onClick={() =>
//                                             history.push('/epic1')
//                                         }
//                                         // key={image.id}
//                                         src={image.card_3}
//                                     /> */}
//                                 </tbody>
//                             </table>
//                         ))}
//                 </div>
//                 {/* <p>
//                     <b>this is (user something)</b>
//                 </p> */}
//                 {/* <div>
//                     {storyText.map &&
//                         storyText.map((story) => {
//                             return (
//                                 <div key={story.id}>
//                                     <ul>
//                                         <li>{story.story_text} </li>
//                                     </ul>
//                                 </div>
//                             );
//                         })}
//                 </div> */}
//             </div>
//         </>
//     );
// }

// // this allows us to use <App /> in index.js
// export default UserPage;
