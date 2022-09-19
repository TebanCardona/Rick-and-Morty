import React from "react";
import "./characteres.css";
export const Characteres = ({ characteres = [] }) => {
  return (
    <div className="info">
      {characteres.map((item, index) => (
        <div key={index} className="col">
          <div className="card">
            <img src={item.image} alt={item.name} />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <hr />
              <p>Location: {item.location.name}</p>
              <p>Species: {item.species}</p>
              <p>Status: {item.status}</p>
              <p>Gender: {item.gender}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
