import React, { useState, useRef, useEffect } from "react";
import "./InlineEdit.css";
import { FaRegTrashAlt, FaCheck, FaTimesCircle } from "react-icons/fa";

const TextareaEditInline = ({
  dataId,
  dataText,
  setEditMode,
  handleSubmit,
}) => {
  const [editingValue, setEditingValue] = useState(dataText);
  const textareaRef = useRef();

  const updateHandler = (event) => {
    event.preventDefault();
    // console.log(event.target[0].value); // textarea is target[0] element
    if (event.target[0].value.trim() === "") {
      setEditingValue(dataText);
    } else {
      handleSubmit(dataId, event.target[0].value);
    }
  };

  const onInput = (target) => {
    // target.style.height = target.scrollHeight - 16 + "px";
    if (target.scrollHeight > 60) {
      // target.style.height = "5px";
      // target.style.height = target.scrollHeight + 16 + "px";
      target.style.height = target.scrollHeight - 5 + "px";
      console.log("scroll height: " + target.scrollHeight);
      console.log("height: " + target.style.height);
    }
  };

  useEffect(() => {
    onInput(textareaRef.current);
  }, [onInput, textareaRef]);

  return (
    <form onSubmit={updateHandler}>
      <div className="card update-card">
        <div className="card-body update-card-body">
          <textarea
            id="inline-text-area"
            type="text"
            rows={1}
            aria-label="Field name"
            value={editingValue}
            onChange={(event) => setEditingValue(event.target.value)}
            onInput={(event) => onInput(event.target)}
            ref={textareaRef}
          />
        </div>
        <div className="card-footer update-card-footer">
          <span className="update-footer-buttons">
            <button
              id="cancel-btn"
              type="button"
              className="btn btn-danger btn-sm btn-cancel"
              onClick={() => setEditMode("close-form")}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-success btn-sm btn-update">
              Update
            </button>
          </span>
        </div>
      </div>
    </form>
  );
};

export default TextareaEditInline;
