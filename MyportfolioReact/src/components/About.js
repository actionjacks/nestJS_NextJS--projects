import React from "react";
import AvatarFace from "./AvatarFace";

function About({ data, theme }) {
  return (
    <div className={`about ${theme}`}>
      {data?.about ? (
        <>
          <AvatarFace />
          <div className="about__details">
            <aside className="about__me">
              <h2>{data.about.aboutMe}</h2>
              <p>{data.about.aboutMeDetails}</p>
            </aside>
            <aside className="about__me__details">
              <h2>{data.about.contact}</h2>
              <p className="about__me_details__adress">
                <span>{data.about.contactDetails.name}</span>
                <br />
                <span>{data.about.contactDetails.street}</span>
                <br />
                <span>{data.about.contactDetails.zipcode}</span>
                <br />
                <span>{data.about.contactDetails.town}</span>
                <br />
                <span>{data.about.contactDetails.phone}</span>
                <br />
                <span>{data.about.contactDetails.mail}</span>
                <br />
              </p>
            </aside>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default About;
