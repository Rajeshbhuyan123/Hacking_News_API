// Singlepage.js
import React, { useContext, useEffect, useReducer } from "react";
import { GetData } from "./context/FetchAllData";
import { useParams } from "react-router-dom";
import reducerFun from "./reducers/Reducer";
import "./singlepage.css";

const Singlepage = () => {
  const { id } = useParams();
  const data = useContext(GetData);
  const [state, dispatch] = useReducer(reducerFun, data);

  useEffect(() => {
    async function getDetails() {
      try {
        let res = await data.news.find((item) => id === item.objectID);
        dispatch({ type: "details", payload: res });
      } catch (error) {
        console.log(error);
      }
    }
    getDetails();
  }, [id, data.news]);

  return (
    <div className="single-container">
      {state.details ? (
        <div className="singlemain">
          <h1 className="title">{state.details.title}</h1>
          <h3>POINTS: {state.details.points}</h3>
          <div className="comments">
            {state.details.children ? (
              <div>
                <h4>COMMENTS: {state.details.children.length}</h4>
                <h5>List Of Comments</h5>
                {state.details.children ? (
                  state.details.children.map((item, i) => (
                    <div key={i} className="comment" style={{backgroundColor:"smoky"}}>
                      <p>{item}</p>
                    </div>
                  ))
                ) : null}
              </div>
            ) : (
              <p>COMMENTS: 0</p>
            )}
          </div>
        </div>
      ) : (
        <h1>No data found</h1>
      )}
    </div>
  );
};

export default Singlepage;
