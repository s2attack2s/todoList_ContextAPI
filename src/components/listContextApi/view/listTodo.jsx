import React, { useContext, useEffect, useState } from "react";
import { ListContext } from "../../../App";
import ListDetail from "./listDetail";
import "../../listContextApi/css/list.css";

function ListTodo() {
  let listData = useContext(ListContext);
  let [content, setContent] = useState();
  let [workDay, setWorkDay] = useState();
  let [showButton, setButton] = useState(true);
  let handChangContent = (e) => {
    content = e.target.value;
    setContent(content);
  };
  let handChangWorkDay = (e) => {
    workDay = e.target.value;
    setWorkDay(workDay);
  };
  let insertTodo = () => {
    let newData = {
      content,
      workDay,
    };
    listData.push(newData);
    setWorkDay((workDay = ""));
    setContent((content = ""));
    setButton((showButton = true));
  };

  let button;
  if (showButton) {
    button = <button onClick={insertTodo}>Gửi</button>;
  } else {
    button = (
      <div>
        <button onClick={insertTodo}>Cập nhật</button>
        <button onClick={insertTodo}>Hủy</button>
      </div>
    );
  }
  return (
    <>
      <div className="todoList">
        <h2>Todo List - Context API</h2>
        <div className="screen_input">
          <textarea
            id="content"
            placeholder="Nhập nội dung..."
            rows="5"
            value={content}
            onChange={handChangContent}
          ></textarea>
          <input
            id="workDay"
            type="date"
            value={workDay}
            onChange={handChangWorkDay}
          />
          {button}
        </div>
        <div className="todoGroup">
          <div className="content">Nội dung</div>
          <div className="addTime">Ngày tạo</div>
          <div className="setting">Tùy chọn</div>
        </div>
        <div className="groupContent" id="groupContent">
          <ListDetail />
        </div>
      </div>
    </>
  );
}
export default ListTodo;
