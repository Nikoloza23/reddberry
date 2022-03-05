import {createStore} from 'redux';
import handleCart from '../reducer';

const store = createStore(handleCart);

export default store;