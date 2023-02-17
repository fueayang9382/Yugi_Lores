import {useDispatch, useSelector} from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

//import { useDispatch, useSelector } from 'react-redux';//delete if
//import rootReducer from '../../redux/reducers/_root.reducer';//delete if
function EditEpic1Form(){//need to be saga* function?
    const params = useParams();
    const history = useHistory(); 
    const dispatch = useDispatch();//delete if
    const story = useSelector((store) => store.storyToEdit);//delete if
    const reducerHolder = useSelector((store)=> store.reducerHolder)
    useEffect(() => {
        console.log('####what is params.id:', params.id);
        dispatch({
            type:'FETCH_EPIC_TO_EDIT',
            payload: params.id     //params.id
        })
    }, []);//params.id  was taken out
    console.log('####what is params.id:', params.id);
    const handleStoryChange = (event) =>{
        dispatch({
            type: 'SET_STORY_CHANGE',
            payload: event.target.value
        })
    }
    
    const handleEditSubmit = (event)=> {
    event.target.value
        dispatch({
            type:'UPDATE_STORY',
            payload:story
        })
        // history.push('/')
        history.push(`/epic1/${reducerHolder}`)
    }
    return(
        <div>
            <h2>Edit Epic:</h2>
            <form>
                <p>Edit story</p>
                <input 
                type="text"  
                value={story.story_text || ''}
                onChange={handleStoryChange}
                />
                <button onClick={handleEditSubmit}>submit changes</button>
            </form>
        </div>
    )
}

export default EditEpic1Form;