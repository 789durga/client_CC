import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./components/app";
import "bootstrap";
import "bootstrap/dist/js/bootstrap.js";

ReactDOM.render(<App />, document.getElementById("root"));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                     index.js(rendered in index.html)
//                                                       /
//                                                       \(below components are present in ./src/components  directory)
//                                                      app.js
//                                                      /   \
//                                                     /     \
//                                                    /       \
//                                              log.js          dashboard.js
//                                             /\                  /\ \
//                                            /  \                / /  \
//                                           /    \              /  \   \
//                              login-comp.js  register-comp.js /   /    \
//                                                             /    \     \
//                                                            /     /      \
//                                                           /      \       \
//                                                          /       /        \
//                                             navigation.js  left-section.js content using <iframe> tag
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
