import { useSelector } from "react-redux";

const FetchIdText = (state = {}, action) => {
    switch (action.type) {
        case 'SAGA_TO_REDUCER_ID_TEXT':
            return action.payload;// must be the userStory{}
        default:
            return state;// this is just returning an empty object{}
    }
};

export default FetchIdText;
// this part is to fetch the user id so it only render the user story text. 

// this need to move to epic1:  this will render the right story and text
// const grabJustOneText = useSelector((store)=> store.FetchIdText)

// {grabJustOneText.map &&
//     grabJustOneText.map((oneText)=>{
//         return(
//             <div key={oneText.id}>
//                 <p>{oneText.story_text}</p>
//             </div>
//         )
//     })}


