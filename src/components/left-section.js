import React, { Component } from "react";

class LeftSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: [{ icon: "", text: "", link: "" }],
    };
  }
  render() {
    return (
      <div
        className="w3-sidebar bg-dark w3-card text-white "
        style={{
          width: this.props.style.width,
          opacity: "0.95",
          transition: "all 0.5s",
          paddingTop: this.props.style.margin,
          // minheight: "92vh",
        }}
      >
        {this.state.buttons.map((data) => (
          <a
            href={
              data.addUsername === true
                ? data.link + "/" + this.props.username
                : data.link
            }
            target="content"
          >
            <button
              key={data.text}
              className="btn btn-dark w3-block w3-left-align w3-hover-aqua mx-auto "
              style={{
                borderRadius: "0",
                fontSize: this.props.style.fontSize,
                transition: "all 0.5s",
              }}
            >
              <p className="text-center">
                <i className={data.icon}></i>
                <span
                  className="m-2 "
                  style={{
                    transition: "font-size 0.5s",
                    fontSize: this.props.style.spanFontSize,
                  }}
                >
                  {data.text}
                </span>
              </p>
            </button>
          </a>
        ))}
      </div>
    );
  }
  componentDidMount() {
    ////////////getting buttons data
    const url = this.props.serverURL + "/getLeftButtons";

    fetch(url)
      .then((res) => res.json())
      .then((data) => this.setState({ buttons: data }))
      .catch((err) => console.log(err));
  }
}

export default LeftSection;
