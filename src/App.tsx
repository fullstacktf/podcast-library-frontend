import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// Components:
import Header from "components/Layout/Header";
import Footer from "components/Layout/Footer";

// Pages:
import Home from "pages/home";
import Category from "pages/category";
import Podcasts from "pages/podcasts";
import Error404 from "pages/404";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/podcasts" element={<Podcasts />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
      <Toaster position="bottom-right" reverseOrder={false}/>
    </>
  );
}

export default App;
