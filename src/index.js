import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";

// import HomeLayout from './components/HomeLayout/HomeLayout';

import Store from "./components/Props/ExRenderListProduct/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
// jsx : => html được viết trong file js (nền js) được gọi là jsx
// 2 loại function component , class component
root.render(
  <div>
    {/* <Card></Card>
    <Card /> */}
    {/* <AlertComponent /> */}
    {/* <HomeLayout /> */}
    {/* <Databinding /> */}
    {/* <StyleComponent /> */}
    {/* <HandleEvent /> */}
    {/* <StateDemoComponent /> */}
    {/* <ChangeColor /> */}
    {/* <ChangeAvatar /> */}
    {/* <ChangeCar /> */}
    {/* <RenderWithMap /> */}
    {/* <DemoProps /> */}
    <Store />
  </div>
);
