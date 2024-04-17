import React from "react";
import "./list.css";
import Userinfo from "./userInfo/Userinfo.jsx";
import Chatlist from "./chatList/Chatlist.jsx";

function List() {
  return (
    <div className="list">
      <Userinfo />
      <Chatlist />
    </div>
  );
}

export default List;
