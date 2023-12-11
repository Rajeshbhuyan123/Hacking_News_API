import React, { useContext, useState } from "react";
import "./home.css";
import { NavLink } from "react-router-dom";
import { GetData } from "./context/FetchAllData";

const Home = () => {
  const {news,searchHandler} = useContext(GetData);
  const [searchValue, setSearchValue] = useState("");

  const changeHandler = (e) => {
    setSearchValue(e.target.value);
  };
  // searchHandler(searchValue)

  return (
    <div className="container">
      <div className="nav">
        <input onChange={changeHandler} type="text" value={searchValue} />
        <button onClick={() => {searchHandler(searchValue)}}>🔍</button>
      </div>
      <div className="main">
        {news.length ? (
          news.map((item, i) => {
            return (
              <div key={i} className="element">
                <NavLink
                  style={{ textDecoration: "none" }}
                  to={`/detail/${item.objectID}`}
                >
                  <h5 style={{ color: "black" }}>{item.title}</h5>
                  <div>
                    <p>Data:-{item.created_at.substring(0, 10)}</p>
                    <p style={{ fontWeight: "bold", color: "brown" }}>
                      Author:-
                      {item.author
                        .substring(0, 1)
                        .toUpperCase()
                        .concat(item.author.substring(1).toLowerCase())}
                    </p>
                  </div>
                </NavLink>
              </div>
            );
          })
        ) : (
          <h1>No data found</h1>
        )}
      </div>
    </div>
  );
};

export default Home;
