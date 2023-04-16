import {createStore ,combineReducers} from 'redux'
import productReducer from './Redux/Reducers/Reducer'


const rootReducers = combineReducers({
    productReducer
})

export const store = createStore(rootReducers);

