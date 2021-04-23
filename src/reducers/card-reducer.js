const INITIAL_STATE = {
  text: "Hello World",
};

const cardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CARD_TEXT":
      return {
        ...state,
        text: action.payload,
      };
    default:
      return state;
  }
};
export default cardReducer;
