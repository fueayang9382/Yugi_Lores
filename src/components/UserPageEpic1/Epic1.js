import React from 'react';
import { useHistory, useParams } from 'react-router-dom'; //TOU's work
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function Epic1() {
    const history = useHistory(); //Tou's work
    const params = useParams();
    const dispatch = useDispatch();
    // const image = useSelector((store) => store.imageReducer);
    const image = useSelector((store) => store.idCardImageReducer);
    const storyText = useSelector((store) => store.storyReducer);
    const [story, setStory] = useState('');

    //Testing n delete if error
    const grabJustOneText = useSelector((store) => store.FetchIdText);
    //Testing n delete if error

    useEffect(() => {
        console.log('what is params.id', params.id);
        dispatch({
            type: 'SAGA/FETCH_ID_IMAGE',
            payload: params.id,
        });
        dispatch({
            type:'SAGA/FETCH_ID_TEXT',
            payload: {
                epic_id: params.id
            }
        })
    }, []);
// console.log('what is params.id', params.id);
    const addStory = (event) => {
        event.preventDefault();
        console.log('this is the id boom!:', image.id);
        let userStory = {
            epic_id: params.id,
            story_text: story,
        };
        dispatch({
            type: 'SAGA/ADD_STORY',
            payload: userStory,
        }); //wait just 5 seconds
        // dispatch({
        //     type: 'SAGA/FETCH_ID_TEXT',
        //     payload: params.id,
        // });

        setStory('');// clear out input
    };

    ///my Delete const:TOU

    const handleEdit = (story) => {
        history.push(`/epic1/edits/${story.id}`);
    };

    const handleLog = () => {
        console.log('this is stories to render:', grabJustOneText);
    };

    const deleteStory = (oneTextid, event) => {
        // event.preventDefault();
        console.log('what is storyId', oneTextid);
        dispatch({
            type: 'SAGA/DELETE_STORY',
            payload: {
                oneTextid,
                epic_id: params.id
            }
        })
        // dispatch({
        //     type: 'SAGA/FETCH_STORY',
        // });

        const handleEditSubmit = (event)=> {
            event.target.value
                dispatch({
                    type:'UPDATE_STORY',
                    payload:story
                })
                // history.push('/')
                history.push('/epic1')
            }

            const handleEdit = (story)=>{
                history.push(`/epic1/edits/${story.id}`);
            }

        
    };

    return (
        <div className="container">
            <div>
                <button onClick={handleLog}>story</button>
                <p>This is SOLO + this it make solo more than just CRUD</p>
                <div>
                    <img src={image.card_1} />
                </div>
                <div>
                    <img src={image.card_2} />
                </div>
                <div>
                    <img src={image.card_3} />
                </div>

                <input
                    type="text"
                    value={story} //setStory will set story.
                    placeholder="Your Story Goes Here"
                    onChange={(event) => setStory(event.target.value)}
                />
                <button onClick={addStory}>Submit</button>
                {storyText.map && /// bring back
                    storyText.map((story) => {
                        return (
                            <div key={story.id}>
                                <p>{story.story_text} </p>
                                <button
                                    onClick={() => {
                                        console.log(
                                            ` find this log ${story.id}`
                                        );
                                        deleteStory(story.id);
                                    }}
                                >
                                    Delete this description
                                </button>
                             
                            </div>
                        );
                    })}

                {/* //Testing n delete if error
    //Testing n delete if error */}


{/* can i use another dispatch or useEffect to render to bring in 
 sync */}



                {grabJustOneText.map &&
                    grabJustOneText.map((oneText) => {
                        return (
                            <div key={oneText.id}>
                                <p>{oneText.story_text}</p>
                                <button onClick={()=> {console.log(` find this log ${oneText.id}`);deleteStory(oneText.id)}}>
                            Delete this description
                        </button>
                        <button onClick={(()=>handleEdit(oneText.id))}>Edit epic</button>
                            </div>
                            
                        );
                    })}





                {/* //Testing n delete if error
    //Testing n delete if error */}

                {/* <input
                    type="text"
                    value={story} //setStory will set story. 
                    placeholder="Your Story Goes Here"
                    onChange={(event) => setStory(event.target.value)}
                />
                <button onClick={addStory}>Submit</button> */}

                {/* /////////////////////////////////////////////////////////////////// */}
                {/* /////////////////////////////////////////////////////////////////// */}
                {/* /////////////////////////////////////////////////////////////////// */}
                {/* /////////////////////////////////////////////////////////////////// */}
                {/* /////////////////////////////////////////////////////////////////// */}
                {/* /////////////////////////////////////////////////////////////////// */}
                {/* /////////////////////////////////////////////////////////////////// */}
                {/* <p onClick={() => history.push('/card1Selected')}>
                    card_1: Shi-en confronts his father's killer.
                </p>
                <p onClick={() => history.push('/card2Selected')}>
                    card_2: Hands tries to kill Shin but failed.
                </p>
                <p onClick={() => history.push('/card3Selected')}>
                    card_3: Shi-en's and Shogun Shin's blade clashed!{' '}
                </p>
                <button>ADD more to Six Samurai Epic</button>
                <button>DElETE ALL SIX SAMURAI EPIC</button>
                <p>the^^ Add button will add picture to the epic </p>
                <button onClick={() => history.push('/user')}>
                    Go Back user's page
                </button> */}
            </div>
        </div>
    );
}

export default Epic1;
