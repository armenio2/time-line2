const initialState = {
    router: '/',
    userSelected: ''
};

function routerReducer(state = initialState, action) {
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

export default routerReducer;