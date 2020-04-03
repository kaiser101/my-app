const INCREMENT = "INCREMENT";

const increment = (cnt) => {
    return {
        type: INCREMENT,
        cnt,
    };
};

const incrementAsync = (cnt) => (dispatch) => {
    setTimeout(() => dispatch(increment(cnt)), 1000);
};

export default incrementAsync;
