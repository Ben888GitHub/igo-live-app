import React, { useState } from "react";
import { Jumbotron, Container, Image } from "react-bootstrap";
import "./App.css";
import ReactPlayer from "react-player";
import { Player } from "video-react";
import Iframe from "react-iframe";
// import 'node_modules/react-modal-video/scss/modal-video.scss';
import ModalVideo from "react-modal-video";
import Video from "react-video-renderer";
import NavigationBar from "./components/NavigationBar";
import GridLayout from "./components/GridLayout";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="App">
      <NavigationBar />
      <br />
      <GridLayout />
      <br />
      <div className="footer">
        {/* <p>This is some content in sticky footer</p> */}
        {/* <div className="footer_contents"> */}
        <p
          style={{
            marginTop: 13,
            color: "#f7f7f7",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          Copyright © 2020, iGo Live. All Rights Reserved
        </p>
        {/* </div> */}
      </div>
      <ScrollToTop />
    </div>
  );
}

export default App;
