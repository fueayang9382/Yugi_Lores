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
    const image = useSelector((store) => store.imageReducer);
    const storyText = useSelector((store) => store.storyReducer);
    const [story, setStory] = useState('');

    useEffect(() => {
        console.log(storyText);
        dispatch({
            type: 'SAGA/FETCH_IMAGE',
            
        });
        dispatch({
            type: 'SAGA/FETCH_STORY',
        });
    }, [params.id]);
    let id;
    const addStory = (event) => {
        image.map((x) => {
            return (id = x.id);
        });

        event.preventDefault();
        console.log('this is the id boom!:', id);
        let userStory = {
            // epic_id: id, hard code for now
            story_text: story
        };
        dispatch({
            type: 'SAGA/ADD_STORY',
            payload: userStory,
        });
        setStory('');
    };

    ///my Delete const:TOU
    const deleteStory = (storyId, event) => {
        // event.preventDefault();
        console.log('what is storyId', storyId);
        dispatch({
            type: 'SAGA/DELETE_STORY',
            payload: storyId,
        })
        // dispatch({
        //     type: 'SAGA/FETCH_STORY',
        // });

        
    };
    ///my Delete const:TOU
    const handleEdit = (story)=>{
        history.push(`/epic1/edits/${story.id}`);
    }
    
    return (
        <div className="container">
            <div>
                {image.map &&
                    image.map((image) => (
                        <img key={image.id} src={image.card_1} />
                    ))}
                {storyText.map && 
                    storyText.map((story) => {
                        return <div key={story.id}><p>{story.story_text} </p> 
                        <button onClick={()=> {console.log(`some bullshit 666 ${story.id}`);deleteStory(story.id)}}>
                            Delete this description
                        </button>
                        <button onClick={(()=>handleEdit(story))}>Edit epic</button>
                        </div>;
                    })}

                <input
                    type="text"
                    value={story} //setStory will set story. 
                    placeholder="Your Story Goes Here"
                    onChange={(event) => setStory(event.target.value)}
                />
                <button onClick={addStory}>Submit</button>

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
