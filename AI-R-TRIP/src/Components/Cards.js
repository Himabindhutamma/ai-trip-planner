import React from "react";
import "./Cards.css";

const Cards = (props) => {
  return (
    <>
      {/* <div className="card">
        <div className="card__body">
          <img src={props.img} className="card__image" />
          <h2 className="card__title">{props.title}</h2>
          <p className="card__place">{props.place}</p>
          <p className="card__duration">{props.duration}</p>
          <button className="card__btn">{props.button}</button>
        </div>
      </div> */}
      <div className="card">
        <img src="https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" />
        <div className="card-content">
          <h3>Card1</h3>
          <p>Lorem Ipsum</p>
          <button className="btn">Read More</button>
        </div>
      </div>
      <div className="card">
        <img src="https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" />
        <div className="card-content">
          <h3>Card2</h3>
          <p>Lorem Ipsum</p>
          <button className="btn">Read More</button>
        </div>
      </div>
      <div className="card">
        <img src="https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" />
        <div className="card-content">
          <h3>Card3</h3>
          <p>Lorem Ipsum</p>
          <button className="btn">Read More</button>
        </div>
      </div>
    </>
  );
};
const CardsContainer = ({ cards }) => {
  return (
    <div className="card-container">
      <Cards />
      {/* {cards.map((card, index) => (
        <Cards key={index} {...card} />
      ))} */}
    </div>
  );
};

export default CardsContainer;
