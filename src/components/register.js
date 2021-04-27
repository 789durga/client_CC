import React, { Component } from "react";

const Register = (props) => {
  const register = [
    {
      tag: "input",
      text: "username",
      type: "text",
      id: "1",
      className: "form-control form-control-lg",
    },
    {
      tag: "input",
      text: "password",
      type: "text",
      id: "2",
      className: "form-control form-control-lg",
    },
    {
      tag: "input",
      text: "name",
      type: "text",
      id: "3",
      className: "form-control form-control-lg",
    },
    {
      tag: "input",
      text: "register",
      type: "submit",
      id: "4",
      className:
        "btn btn-primary btn-block btn-xl p-2 form-control form-control-lg",
    },
    {
      tag: "button",
      text: "login now",
      type: "button",
      id: "5",
      className: "btn btn-link text-danger",
    },
  ];

  return (
    <React.Fragment>
      {register.map((fields) => {
        if (fields.tag === "input") {
          return (
            <div className="form-group" key={fields.id}>
              <input
                placeholder={fields.text}
                type={fields.type}
                name={fields.text}
                id={fields.id}
                className={fields.className}
              />
            </div>
          );
        } else {
          return (
            <div className="form-group" key={fields.id}>
              <button
                className={fields.className}
                onClick={props.onChange}
                id={fields.id}
                type={fields.type}
              >
                {fields.text}
              </button>
            </div>
          );
        }
      })}
      <p>{props.errorMessage}</p>
    </React.Fragment>
  );
};

export default Register;
