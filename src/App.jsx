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
import reducer, { INITIAL_STATE } from "./reducer/Reducer";
import ProductInfo from "./pages/ProductInfo";

export default function App() {
  const [card, setCard] = useState(true);
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
  const [likedProducts, setLikedProducts] = useState({});

  return (
    <div className="font-inter">
      <Contexts.Provider value={{ card, setCard, state, dispatch, likedProducts, setLikedProducts }}>
        <Overview />
        <Navbar />
        <Main/>

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/liked" element={<Liked />}/>
          <Route path="/saved" element={<Choose />}/>
          <Route path="/productInfo/:id" element={<ProductInfo />}/>
        </Routes>

        <Footer />
      </Contexts.Provider>
    </div>
  );
}
