// import { Drawer } from "./components";
import "./App.css";
// import CreateClass from "./components/CreateClass/CreateClass";
import Header from "./components/Header/Header";
import Form from "./components/CreateClass/Form";
import Begin from "./components/Begin/Begin";
import JoinClass from "./components/JoinClass/JoinClass";
import React from "react";

// import PracticaTwo from "./components/Practice/PracticaTwo";
// import Practice from "./components/Practice/Practice";

function App() {
  return (
    <div className="App">
      <Header />
      <Begin />
      <JoinClass />

      <Form />
    </div>
  );
}

export default App;
