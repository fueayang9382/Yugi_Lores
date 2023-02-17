import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import imageReducer from './image.reducer';
import storyReducer from './story.reducer';
import storyToEdit from './storyToEdit';
import idCardImageReducer from './idCardImage.reducer';
import FetchIdText from './Fetch.Id.Text.reducer';
import reducerHolder from './EditHoldStory.reducer';
// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user,
  imageReducer,
  storyReducer,
  storyToEdit,
  idCardImageReducer,//******** shong
  FetchIdText,
  reducerHolder
});

export default rootReducer;
