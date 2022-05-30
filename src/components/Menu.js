import React from "react";


function Menu({ items }) {


  return (
    <div className="main-menu">
      {items.map((item, index) => {
        return (
          <div className="single-menu" key={index}>
            <div className="img-container">
              <img src={item.img} alt={item.title}></img>
            </div>
            <div className="menu-info">
              <div className="header">
                <h3>{item.title}</h3>
                <span>${item.price}</span>
              </div>
              <p className="menu-info-text">{item.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Menu;


