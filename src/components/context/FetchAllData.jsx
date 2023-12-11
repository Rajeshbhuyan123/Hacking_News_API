import { createContext, useEffect, useReducer } from "react";
import reducerFun from "../reducers/Reducer";

export const GetData = createContext();

const FetchAllData = ({ children }) => {
  const initialState = {
    news: [],
    details: {},
  };

  const [state, dispatch] = useReducer(reducerFun, initialState);

  const searchHandler = (searchValue) => {
    if (searchValue) {
      let res = state.news.filter((item) => {
        return item.title.toLowerCase().includes(searchValue.toLowerCase());
      });
      dispatch({ type: "searchData", payload: res });
    }
  };

  useEffect(() => {
    async function getAllData() {
      try {
        let response = await fetch(
          "https://hn.algolia.com/api/v1/search?query=test"
        );
        let result = await response.json();
        dispatch({ type: "fetchData", payload: result.hits });
      } catch (error) {
        console.log(`Error is : ${error}`);
      }
    }
    getAllData();
  }, []);

  return (
    <GetData.Provider value={{ ...state, searchHandler }}>
      {children}
    </GetData.Provider>
  );
};

export default FetchAllData;
