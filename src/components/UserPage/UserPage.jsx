import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

function UserPage() {
    // this component doesn't do much to start, just renders some user reducer info to the DOM
    const user = useSelector((store) => store.user);
    const history = useHistory();
    const image = useSelector((store) => store.imageReducer);
    const storyText = useSelector((store) => store.storyReducer);
    const dispatch = useDispatch();
    console.log(image);
    useEffect(() => {
        dispatch({
            type: 'SAGA/FETCH_IMAGE',
        });
    }, []);

    return (
        <>
            <div className="container">
                <h2>Welcome, {user.username}!</h2>
                <p>This is SOLO + this it make solo more than just CRUD</p>
                <p>Your ID is: {user.id}</p>
                <LogOutButton className="btn" />
                <div>
                    {image.map &&
                        image.map((image) => (
                            <img
                                onClick={() => history.push('/epic1')}
                                key={image.id}
                                src={image.card_1}
                            />
                        ))}
                </div>
                <p>
                    <b>The Six Samurai Epic</b>
                </p>
                <div>
                    {storyText.map &&
                        storyText.map((story) => {
                            return (
                                <div key={story.id}>
                                    <ul>
                                    <li>{story.story_text} </li>
                                    </ul>
                                    {() => {console.log(` find this log ${story.id}`);deleteStory(story.id);}}
                                </div>
                            );
                        })}
                </div>
            </div>
        </>
    );
}

// this allows us to use <App /> in index.js
export default UserPage;
