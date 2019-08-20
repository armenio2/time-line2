import { createStore } from 'redux';


const initialState = {
    router: '/',
    userSelected: null
};

function allReducer(state = initialState, action) {
    switch (action.type) {
        case 'selectedID':
            return {
                ...state,
                router: action.newRouter,
                userSelected: action.newUserId
            };
        default:
            return state;
    }
}


const store = createStore(allReducer);

export default store