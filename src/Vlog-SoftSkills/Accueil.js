// Vlog.js
import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import Update from "./Updatee";
import SlideshowWithImages from "./Images";
import Ajoute from "./Ajoute";

export default function Vlog() {
  return (
    <Fragment>
      {/* Keep BrowserRouter here */}
      <BrowserRouter basename="/yousef2">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ajoute" element={<Ajoute />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/images/:images" element={<SlideshowWithImages />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}
