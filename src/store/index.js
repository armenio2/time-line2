import { createStore } from 'redux';

import RouterReducer from '../reducer/index.js';

const store = createStore(RouterReducer);

export default store