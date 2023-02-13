import {useDispatch} from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function EditEpic1Form(){
    const params = useParams();
    useEffect(() => {
        console.log('what is params', params);

    }, [params.id]);

    
    return(
        <div>
            <h2>Edit Epic:</h2>
            <form>
                <input type="text" />
                <button >submit changes</button>
            </form>
        </div>
    )
}

export default EditEpic1Form;