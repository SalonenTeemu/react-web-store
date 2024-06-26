const initialState = {
  role: "guest",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INIT_AUTH":
      return { ...action.payload };

    case "REMOVE_AUTH":
      return { role: "guest" };

    default:
      return state;
  }
};

export default authReducer;
