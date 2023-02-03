//import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import React, { useState } from "react";
import Alert from "./Components/Alert";
import About from "./Components/About";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
// ---------------------Props And PropTypes-----------------//
// Props is used to pass the value from one component to others and rendered on specific component to pass like below title and about props pass.
// PropTypes is two types one in default set props and is to should define in ths we use in Navbar component
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [darkRedish, setdarkRedish] = useState("light");
  const [pinkish, setpinkish] = useState("light");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const handleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      document.title = "My App - Dark Mode";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "My App - Light Mode";

      showAlert("Light mode has been enabled", "success");
    }
  };
  const handleRedish = () => {
    if (darkRedish === "light") {
      setdarkRedish("red");
      document.body.style.backgroundColor = "red";
    } else {
      setdarkRedish("light");
      document.body.style.backgroundColor = "white";
    }
    // console.log("i am clicked");
  };
  const handlePinkish = () => {
    if (pinkish === "light") {
      setpinkish("pink");
      document.body.style.backgroundColor = "pink";
    } else {
      setpinkish("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="MyApp"
          about="About"
          mode={mode}
          handleMode={handleMode}
          handleRedish={handleRedish}
          handlePinkish={handlePinkish}
        />
        <Alert alert={alert} />
        {/* ----------------exact keyword before use of path, then the react use for exect matching of the components otherwise use partial matching------------------ */}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route
            path="/"
            element={
              <Form
                heading="Enter Some Text Below"
                mode={mode}
                showAlert={showAlert}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
