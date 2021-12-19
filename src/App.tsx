import React from "react";
import { render } from "react-dom";
import { Navigate, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { getToken } from "services/authService";

// Components:
import Header from "components/Layout/Header";
import Footer from "components/Layout/Footer";

// Pages:
import Home from "pages/home";
import Category from "pages/category";
import Play from "pages/play";
import Author from "pages/author";
import Login from "pages/auth/login";
import Register from "pages/auth/register";
import Dashboard from "pages/app/dashboard";
import Upload from "pages/app/upload";
import Error404 from "pages/404";

function App() {
  return (
    <>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/podcasts" element={<Home />} />
        <Route path="/play/" element={<Navigate to={`/`} />} />
        <Route path="/play/:id" element={<Play />} />
        <Route path="/author/" element={<Navigate to={`/`} />} />
        <Route path="/author/:id" element={<Author />} />
        <Route path="/auth" element={<Navigate to={`/auth/login`} />} />
        <Route
          path="/auth/login"
          element={getToken() ? <Navigate to={`/app/dashboard`} /> : <Login />}
        />
        <Route
          path="/auth/register"
          element={
            getToken() ? <Navigate to={`/app/dashboard`} /> : <Register />
          }
        />
        <Route
          path="/app"
          element={getToken() ? <Dashboard /> : <Navigate to={`/auth`} />}
        />
        <Route
          path="/app/dashboard"
          element={getToken() ? <Dashboard /> : <Navigate to={`/auth`} />}
        />
        <Route
          path="/app/upload"
          element={getToken() ? <Upload /> : <Navigate to={`/auth`} />}
        />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
}

export default App;
