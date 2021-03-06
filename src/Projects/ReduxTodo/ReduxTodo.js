import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { Add_Todo, Dell_Todo, Dell_ALL } from "../../Actions";
import { useSelector } from "react-redux";
const ReduxTodo = () => {
  const [state, setstate] = useState();
  const dispatch = useDispatch();

  const Todo = useSelector((state) => state.TodoReducer.Todos);
  const handleChange = (e) => {
    setstate(e.target.value);
  };

  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  return (
    <>
      <h1>Todo List Using React JS </h1>
      <div className="container w-50 shadow text-center border border-5">
        <div class="input-group mb-3 p-5">
          <input
            type="text"
            class="form-control"
            placeholder="Add Your Todo's"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            onChange={(e) => handleChange(e)}
            value={state}
          />
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={() => dispatch(Add_Todo(state), setstate(" "))}
          >
            Button
          </button>
        </div>
        <ol>
          {Todo.map((val, index) => (
            <li className="text-start text-uppercase ">
              {val.value}
              {/* <i className="bi bi-trash text-danger h5"></i> */}
            </li>
          ))}
        </ol>
        <button
          class="btn btn-outline-secondary btn-lg"
          type="button"
          id="button-addon2"
          onClick={() => dispatch(Dell_ALL())}
        >
          Dell All
        </button>
        <p className="text-end">{date}</p>
      </div>
    </>
  );
};

export default ReduxTodo;
