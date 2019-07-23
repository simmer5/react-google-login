import {combineReducers} from 'redux' 
import {reducer as formReducer} from 'redux-form' //feduthe formscer for 
import authReducer from './authReducer'


export default combineReducers({
    auth: authReducer, 
    form: formReducer

})