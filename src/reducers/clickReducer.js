//import { CLICK_UPDATE_VALUE } from '../actions/actionTypes';
const initialState = {
    newValue: ''
};
const clickReducer = (state = initialState, action) => {
    console.log("entrou no clickreducer")
    switch (action.type) {
        case 'selectedID':
            return {
                ...state,
                newValue: action.newValue
            };
        default:
            return 'state';
    }
};

export default clickReducer;