const initialState = { count: 2 };

const reducer = (state = initialState, action) => {
    const { type, cnt } = action;

    switch (type) {
        case "INCREMENT":
            return { ...state, count: state.count * cnt };
        default:
            return state;
    }
};

export default reducer;
