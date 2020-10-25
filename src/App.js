import React from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import GridLayout from "./components/GridLayout";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <br />
      <GridLayout />
      <br />
      <div className="footer">
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
