// store.js
import { createStore } from 'redux';
import rootReducer from './reducer'; // Assuming you have a rootReducer

const store = createStore(rootReducer);

export default store;
