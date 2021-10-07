import React, { Component } from "react";
import Router from "next/router";
import Context from "../contexts/HeaderContext";
export default function Index() {
  <Context.Provider>
  React.useEffect(() => {
    Router.push("/admin/dashboard")
  });
  </Context.Provider>

  return <div />;
}
