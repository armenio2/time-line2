import { createStore } from 'redux';


const initialState = {
    router: '/',
    userSelected: ''
};

function allReducer(state = initialState, action) { // separar o reducer numa pasta
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