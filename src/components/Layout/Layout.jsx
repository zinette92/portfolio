import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

export default function Layout() {
  return (
    <>
      <main>
        {/* Outlet for rendering child routes */}
        <Outlet />
      </main>
    </>
  );
}
