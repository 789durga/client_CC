import React, { Component } from "react";

const Login = (props) => {
  let login = [
    {
      tag: "input",
      text: "username",
      type: "text",
      id: "1",
      className: "form-control form-control-lg ",
    },
    {
      tag: "input",
      text: "password",
      type: "text",
      id: "2",
      className: "form-control form-control-lg ",
    },
    {
      tag: "input",
      text: "login",
      type: "submit",
      id: "3",
      className:
        "btn btn-primary btn-block btn-xl p-2 form-control form-control-lg",
    },
    {
      tag: "button",
      text: "not registerd ? then register",
      type: "button",
      id: "4",
      className: "btn btn-link text-danger btn-block",
    },
  ];

  return (
    <React.Fragment>
      {login.map((fields) => {
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

export default Login;
