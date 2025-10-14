import React from "react";
import { Outlet } from "react-router-dom";
function UserLayout() {
  return (
    <section>
      <h1 className="text-white font-bold">UserLayout</h1>
      <Outlet />
    </section>
  );
}

export default UserLayout;
