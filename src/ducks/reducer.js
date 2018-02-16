const initialState = {
updateAllCaps: ''
}

const UPDATE_ALL_CAPS = 'UPDATE_ALL_CAPS'

function reducer( state = initialState, action) {
    switch(action.type){
        case UPDATE_ALL_CAPS:
            return Object.assign({}, state, {allCaps : action.payload});
    default: 
        return state;
    }
}

export const updateAllCaps = allCaps =>
{
    return {
        type: UPDATE_ALL_CAPS,
        payload: allCaps
    };
}

export default reducer;