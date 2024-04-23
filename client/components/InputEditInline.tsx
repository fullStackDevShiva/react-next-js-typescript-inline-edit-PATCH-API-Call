import React, { useState } from "react";
import "./InlineEdit.css";
import { FaTimes, FaCheck } from "react-icons/fa";

const InputEditInline = ({ dataId, dataText, handleSubmit, setEditMode }) => {
  const [editingValue, setEditingValue] = useState(dataText);

  const updateHandler = (event) => {
    event.preventDefault();
    //console.log(event.target[0].value); // textarea is target[0] element
    if (event.target[0].value.trim() === "") {
      setEditingValue(dataText);
    } else {
      handleSubmit(dataId, event.target[0].value);
    }
  };

  return (
    <form onSubmit={updateHandler}>
      <div className="input-group inline-edit-card">
        <input
          type="text"
          id="inline-input-field"
          className="form-control"
          aria-label="Field name"
          autoComplete="off"
          value={editingValue}
          onChange={(event) => setEditingValue(event.target.value)}
        />
        <div className="input-group-append">
          <button className="btn btn-save-update" type="submit">
            <FaCheck />
          </button>

          <button
            className="btn btn-cancel-update"
            id="cancel-btn"
            type="button"
            onClick={() => setEditMode("close-form")}
          >
            <FaTimes />
          </button>
        </div>
      </div>
    </form>
  );
};

export default InputEditInline;
