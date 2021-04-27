import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
class NavigationBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      navbar: {
        logo: "",
        header: {
          white: "",
          primary: "",
        },
      },
    };
  }
  render() {
    console.log(this.state);
    return (
      <nav
        className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top"
        style={{ width: "100vw", left: "0px" }}
      >
        <img
          src={this.state.navbar.logo}
          style={{ width: "3%", borderRadius: "50%", marginRight: "1%" }}
        ></img>
        <h4 className="text-white font-weight-bold">
          {this.state.navbar.header.white}
          <span className="text-info">{this.state.navbar.header.primary}</span>
        </h4>

        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              onClick={this.props.onChangeSectionSize}
              className="nav-link"
              href="#"
            >
              <i className="fa fa-bars ml-2"></i>
            </a>
          </li>
        </ul>

        <Dropdown className="mx-auto">
          <Dropdown.Toggle
            variant="dark"
            id="dropdown-basic"
            className="text-white font-weight-bolder text-uppercase"
            style={{ fontSize: "130%" }}
          >
            HI <span className="text-warning">{this.state.name}</span>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#" onClick={this.props.signOut}>
              Sign Out
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </nav>
    );
  }
  componentDidMount() {
    const url = this.props.serverURL + "/getName/" + this.props.username;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ name: data.name, navbar: data.navbar });
      });
  }
}

export default NavigationBar;
