import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Error from "../../pages/Error/Error";
import Layout from "../Layout/Layout";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Route for the home page */}
        <Route index element={<Home />} />
        {/* Route for handling any other undefined routes */}
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}
