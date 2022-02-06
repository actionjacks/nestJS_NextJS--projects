import React from "react";
import "../styles/AboutMe.css";

function AboutMe() {
  return (
    <div className="aboutMe">
      <img
        className="aboutMe__avatar"
        src="https://s3.amazonaws.com/mypresonus/profile/1436971967_454754.jpg" //add avatar
        alt=""
      />
      <section className="aboutMe__description">
        <h1>Artur</h1>
        <h2>adres</h2>
        <p>lorem lorem lorem</p>
      </section>
    </div>
  );
}
export default AboutMe;
