import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from  'redux-devtools-extension';
import rootReducer from './reducers';
import {initialState as usuario} from './reducers/usuario';

const initialState = ({
    usuario
});
const midleware = [thunk];
const store = createStore(rootReducer,initialState,composeWithDevTools(applyMiddleware(...midleware)));

export default store;
