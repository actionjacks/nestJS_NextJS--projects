import React, { useState } from "react";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

function Form({ data, theme }) {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendForm = (e) => {
    e.preventDefault();
    const myMail = "actionjacks22@gmail.com";
    window.open(`mailto:${myMail}?subject=${subject}&body=${name}: ${message}`);
  };
  return (
    <div className={`form ${theme}`}>
      {data?.form ? (
        <>
          <form className="form__contactForm">
            <MailOutlineIcon className={`form__icon ${theme}`} />
            <div className="form__fieldset">
              <h3>{data.form.formTitle}</h3>
              <div className="form__inputName">
                <label htmlFor="contactName">{data.form.name}</label>
                <input
                  value={name}
                  type="text"
                  defaultValue=""
                  id="contactName"
                  name="contactName"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form__inputTitle">
                <label htmlFor="contactSubject">{data.form.subject}</label>
                <input
                  value={subject}
                  type="text"
                  defaultValue=""
                  id="contactSubject"
                  name="contactSubject"
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div className="form__inputTextArea">
                <label htmlFor="contactMessage">{data.form.message}</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  id="contactMessage"
                  name="contactMessage"
                ></textarea>
              </div>
              <div className="form__button">
                <br />
                <button
                  type="submit"
                  onClick={handleSendForm}
                  className="submit"
                >
                  {data.form.sendBtn}
                </button>
              </div>
            </div>
          </form>
        </>
      ) : null}
    </div>
  );
}

export default Form;
