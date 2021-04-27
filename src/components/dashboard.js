import React, { Component } from "react";
import NavigationBar from "./navigation";
import LeftSection from "./left-section.js";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.bigStyle = {
      width: "16%", ////////// leftSection
      contentWidth: "84%", /////////  conten section
      margin: "5%", ////////// leftSection  - text inside button
      display: "", ////////// leftSection  - text in button (not icon)
      fontSize: "large", ////////// leftSection  - button icon size
      spanFontSize: "80%", ////////// leftSection  - button text size
    };
    this.smallStyle = {
      width: "3%",
      contentWidth: "97%",
      margin: "7%",
      display: "none",
      fontSize: "x-large",
      spanFontSize: "0%",
    };

    this.state = {
      sectionStyle: this.bigStyle,
    };

    this.handleSectionSize = this.handleSectionSize.bind(this);
  }
  render() {
    console.log(this.state.formatData);
    return (
      <React.Fragment>
        <div
          styles={{
            height: "100vh",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <NavigationBar
            onChangeSectionSize={this.handleSectionSize}
            signOut={this.props.signOut}
            serverURL={this.props.serverURL}
            username={this.props.username}
          />
        </div>
        <div
          className="container-fluid"
          style={{ padding: "0", height: "96.5%" }}
        >
          <div>
            <LeftSection
              style={this.state.sectionStyle}
              serverURL={this.props.serverURL}
              username={this.props.username}
            />
          </div>
          <iframe ///////// main content using different link present in server
            name="content"
            title="content information"
            style={{
              width: this.state.sectionStyle.contentWidth,
              right: "0px",
              marginLeft: this.state.sectionStyle.width,
              marginTop: "4%",
              transition: "margin 0.5s , width 0.5s",
              minHeight: "91.1vh",
              border: "none",
              // border: "2px black solid",
            }}
          ></iframe>
        </div>
      </React.Fragment>
    );
  }
  componentWillUnmount() {
    this.setState({ userData: {} });
  }

  handleSectionSize() {
    if (this.state.sectionStyle === this.bigStyle)
      this.setState({ sectionStyle: this.smallStyle });
    else this.setState({ sectionStyle: this.bigStyle });
  }
}

export default Dashboard;
