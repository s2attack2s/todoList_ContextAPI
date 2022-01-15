import React from "react";
import { ListContext } from "../listContextApi/view/listTodo";

function Test() {
  return (
    <ListContext.Consumer>
      {(context) => {
        let listData = context.newListData;
        return (
          <>
            {listData.map((val) => {
              return (
                <div className="group">
                  <div>{val.content}</div>
                  <div>{val.workDay}</div>
                </div>
              );
            })}
          </>
        );
      }}
    </ListContext.Consumer>
  );
}
export default Test;
