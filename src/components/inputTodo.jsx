import React, { useState } from "react";
import ReactDom from "react-dom";

const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClickAdd, disabled } = props;
  return (
    <>
      <div style={style}>
        <input
          disabled={disabled}
          placeholder="TODOを入力 "
          value={todoText}
          onChange={onChange}
        />
        <button disabled={disabled} onClick={onClickAdd}>
          追加
        </button>
      </div>
    </>
  );
};
