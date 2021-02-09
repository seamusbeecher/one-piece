// Initial Data
export const initialState = {
    input: ''
};

const reducer = (state, action) => {

    switch(action.type) {
        case 'ADD-EPISODE':
            return {
                ...state,
                input: action.input
            };
        default:
            return state;
    }
}

export default reducer;