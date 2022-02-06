import React, { Component } from "react";
import cardImg from "./card-image.jpg";
import "./Card.css";

export default class Card extends Component {
  render() {
    return (
      <div className="Card">
        <img src={cardImg} alt="" />
      </div>
    );
  }
}
