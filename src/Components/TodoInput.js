import React from "react";
import { useState } from "react";
import { v1 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";

export default function TodoInput() {
  let [name, setName] = useState();
  let dispatch = useDispatch();
  return (
    <div>
      <h2>TodoInput</h2>
      <div className="row m-2">
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          className="col form-control"
        />
        <button
          onClick={() => {
            dispatch(
              addTodo({
                id: uuid(),
                name: name,
              })
            );
            setName('');
          }}
          className="btn btn-primary m-2"
        >
          Add
        </button>
      </div>
    </div>
  );
}
