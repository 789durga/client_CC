import React, { Component } from "react";
import Log from "./log";
import Dashboard from "./dashboard";

/////////////login page and dashboard page is controlled by this class
class App extends Component {
  constructor() {
    super();
    this.state = {
      showLog: true,
      loginError: "",
      registerError: "",
      username: "",
    };
    this.username = "";
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.loginUserLink = "https://13.234.18.254:5000"; ////////// node.js server link url,this will be used in other componenets as propshttp://localhost:8080
  }
  render() {
    return <React.Fragment>{this.showDecide()}</React.Fragment>;
  }

  handleLoginSubmit(event, present) {
    //////////////logging in or registering
    event.preventDefault();
    const sendData = event.target;
    if (present === "login") {
      ////////////////////logging in
      const url = this.loginUserLink + "/login";
      const data = {
        username: sendData[0].value,
        password: sendData[1].value,
      };

      console.log(JSON.stringify(data));

      fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.text();
          } else throw Error;
        })
        .then((resdata) => {
          console.log(resdata);
          if (resdata === "success") {
            this.setState({
              showLog: false,
              username: data.username,
            });
          } else this.setState({ loginError: resdata });
        })
        .catch((error) => console.error("Error:", error));
    } else if (present === "register") {
      /////////////////registering

      const url = this.loginUserLink + "/register";
      const data = {
        username: sendData[0].value,
        password: sendData[1].value,
        name: sendData[2].value,
      };
      fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          // "Content-Type": "application/x-www-form-urlencoded",
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.text();
          } else throw Error;
        })
        .then((resdata) => {
          this.setState({ registerError: resdata });
        })
        .catch((error) => console.error("Error:", error));
    }
  }
  handleSignOut = () => {
    //////////resetting states after singing out
    this.setState({
      showLog: true,
      loginError: "",
      registerError: "",
      username: "",
    });
  };
  showDecide() {
    ///////////switching between login and dashboard page
    let show;
    const showLog = this.state.showLog;
    if (showLog)
      return (
        <Log
          onLogFormSubmit={this.handleLoginSubmit}
          loginErrorMessage={this.state.loginError}
          registerErrorMessage={this.state.registerError}
        />
      );
    else
      return (
        <Dashboard
          username={this.state.username}
          serverURL={this.loginUserLink}
          signOut={this.handleSignOut}
        />
      );
  }
}

export default App;
