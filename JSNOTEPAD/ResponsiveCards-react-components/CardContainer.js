import React, { Component } from "react";
import Card from "./Card";
import "./CardContainer.css";

export default class CardContainer extends Component {
  render() {
    return (
      <div className="CardContainer">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}
