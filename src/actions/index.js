const INCREMENT = "INCREMENT";

const increment = (cnt) => {
    return {
        type: INCREMENT,
        cnt,
    };
};

export default increment;
