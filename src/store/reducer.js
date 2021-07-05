const STATE = {
  color: "green",
};

export default function reducer(state = STATE, action) {
  switch (action.type) {
    case "GET_COLOR":
      return { ...state, color: action.color };
    default:
      return state;
  }
}
