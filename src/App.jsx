import React, { useReducer, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Overview from "./components/Overview";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Contexts } from "./util/Context";
import Main from "./components/Main";
import Liked from "./pages/Liked";
import Choose from "./pages/Choose";
import reducer, { INTIAL_STATE } from "./reducer/Reducer";

export default function App() {
  const [card, setCard] = useState(true);
  const [state, dispatch] = useReducer(reducer, INTIAL_STATE)

  return (
    <div className="font-inter">
      <Contexts.Provider value={{ card, setCard, state, dispatch }}>
        <Overview />
        <Navbar />
        <Main/>

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/liked" element={<Liked />}/>
          <Route path="/saved" element={<Choose />}/>
        </Routes>

        <Footer />
      </Contexts.Provider>
    </div>
  );
}
