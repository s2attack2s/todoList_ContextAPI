import React, { useContext, useEffect } from "react";
import { ListContext } from "../../../App";

function ListDetail() {
  var listData = useContext(ListContext);

  return listData.map((val, key) => (
    <div className="todoGroup" key={key}>
      <div className="content">{val.content}</div>
      <div className="addTime">{val.addTime}</div>
      <div className="setting">
        <button className="edit">Sửa</button>
        <button className="delete">Xóa</button>
      </div>
    </div>
  ));
}
export default ListDetail;
