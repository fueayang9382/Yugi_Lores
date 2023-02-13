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
    useEffect(() => {
        console.log('what is params.id:', params.id);
        dispatch({
            type:'FETCH_EPIC_TO_EDIT',
            payload: params.id
        })
    }, []);//params.id  was taken out

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
        history.push('/epic1')
    }
    return(
        <div>
            <h2>Edit Epic:</h2>
            <form>
                <p>Matt video on 14:73 on saga function</p>
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