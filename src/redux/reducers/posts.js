const initialState = {
    items: null,
    isLoaded: false,
    onePost: ''
};

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'SET_POSTS':
            return {
            ...state,
            items: payload,
            isLoaded: true
        }
        case 'APPEND_POSTS':
            return {
            ...state,
            items: state.items ? [...state.items, payload] : [payload],
            isLoaded: true
        }
        // case 'SET_LOADED_POST':
        //     return {
        //     ...state,
        //     isLoaded: payload,
        // }
        case 'ONE_POST':
            const newItems = {
                ...state.items,
                }  
            return {
            ...state,
            onePost: newItems,
            isLoaded: true
        }
        default:
            return state;
    }
}
