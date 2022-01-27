import React, { useEffect, useState } from "react";
import "../editModal.css";
import EditInput from "./editInput";

function EditModal({ onChange, onSubmit, editFlag, setEditFlag, active }) {
  const handleClose = () => {
    setEditFlag(false);
  };

  const changeDateFormat = (value) => {
    let year = new Date(value).getFullYear();
    let month = new Date(value).getMonth();
    let date = new Date(value).getDate();
    value = `${year}-${month < 9 ? 0 : ""}${month + 1}-${
      date < 10 ? 0 : ""
    }${date}`;

    return value;
  };

  return (
    <div className="edit-modal-parent">
      <div
        id="edit-myModal"
        className="edit-modal"
        style={{ display: editFlag === true ? "block" : "none" }}
      >
        <div className="edit-modal-content">
          <span className="edit-close" onClick={handleClose}>
            &times;
          </span>
          <h3>Input meeting</h3>
          <div>
            <div>
              <EditInput
                type="text"
                name="title"
                id="title"
                onChange={onChange}
                value={active.title}
                label="Title"
                classname="input"
              />

              <EditInput
                type="text"
                name="description"
                id="description"
                onChange={onChange}
                value={active.description}
                label="Description"
                classname="input"
              />

              <EditInput
                type="date"
                name="date"
                id="date"
                onChange={onChange}
                value={changeDateFormat(active.date)}
                label="Date"
                classname="input"
              />

              <div className="time">
                <EditInput
                  type="time"
                  name="stime"
                  id="stime"
                  onChange={onChange}
                  value={active.stime}
                  label="Start Time"
                  classname="input"
                />

                <EditInput
                  type="time"
                  name="etime"
                  id="etime"
                  onChange={onChange}
                  value={active.etime}
                  label="End Time"
                  classname="input"
                />
              </div>
            </div>
          </div>

          <div className="edit-btn-parent">
            <button className="submit btn edit" onClick={onSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
