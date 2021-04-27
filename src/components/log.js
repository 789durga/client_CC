import React, { Component } from "react";
import backImage from "../images/dark.jpg";
import Login from "./login.js";
import Register from "./register.js";

class Log extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogin: true, ///////////////show login or regiter options
    };
  }

  render() {
    let present = "";
    if (this.state.showLogin) present = "login";
    else present = "register";

    return (
      <div
        className="container-fluid "
        style={{
          height: "100vh",
          backgroundImage: `url(${backImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="row justify-content-center">
          <form
            className="form-container border border-primary col col-12 col-sm-4 col-md-4 bg-light justify-self-center text-center rounded p-5"
            style={{ top: "20vh", boxShadow: "0px 0px 10px grey" }}
            onSubmit={(event) => this.props.onLogFormSubmit(event, present)}
          >
            <h1 className="header mb-5 font-weight-bold ">
              HACKATHON <span className="text-info">PROJECTS</span>
            </h1>
            {this.showLoginOrRegister()}
          </form>
        </div>
      </div>
    );
  }
  handleChange = () => {
    const show = this.state.showLogin;
    if (show) this.setState({ showLogin: false });
    else this.setState({ showLogin: true });
  };

  showLoginOrRegister() {
    if (this.state.showLogin)
      return (
        <Login
          onChange={this.handleChange}
          errorMessage={this.props.loginErrorMessage}
        />
      );
    else
      return (
        <Register
          onChange={this.handleChange}
          errorMessage={this.props.registerErrorMessage}
        />
      );
  }
}

export default Log;
