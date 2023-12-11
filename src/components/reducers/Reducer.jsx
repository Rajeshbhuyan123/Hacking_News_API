const reducerFun = (state, action) => {
  switch (action.type) {
    case "fetchData":
      return { ...state, news: [...action.payload] };
    case "searchData":
      return { ...state, news: [...action.payload] };
    case "details":
      return { ...state, details: { ...action.payload } };
    default:
      return state;
  }
};

export default reducerFun;
