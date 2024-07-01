export default (state = [], action) => {
  switch (action.type) {
    case "Fetch_Posts":
      return action.payload;

    case "UPDATE":
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );

    case "DELETE":
      return state.filter((post) => post._id !== action.payload);

    case "Create_Post":
      return [...state, action.payload];

    default:
      return state;
  }
};
