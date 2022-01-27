import React, { useEffect } from "react";
import Input from "./Input";
import "../modal.css";

function Modal({ onChange, onSubmit, setFlag }) {
  useEffect(() => {
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function () {
      modal.style.display = "block";
      setFlag(true);
    };

    span.onclick = function () {
      modal.style.display = "none";
      setFlag(false);
    };

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
        setFlag(false);
      }
    };
  });
  return (
    <div className="modal-parent">
      <button id="myBtn" className="edit btn new">
        New Meeting
      </button>

      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close">&times;</span>
          <h3>Input meeting</h3>
          <div>
            <Input
              type="text"
              name="title"
              id="title"
              onChange={onChange}
              value=""
              label="Title"
              classname="input"
            />

            <Input
              type="text"
              name="description"
              id="description"
              onChange={onChange}
              value=""
              label="Description"
              classname="input"
            />

            <Input
              type="date"
              name="date"
              id="date"
              onChange={onChange}
              value=""
              label="Date"
              classname="input"
            />

            <div className="time">
              <Input
                type="time"
                name="stime"
                id="stime"
                onChange={onChange}
                value=""
                label="Start Time"
                classname="input"
              />

              <Input
                type="time"
                name="etime"
                id="etime"
                onChange={onChange}
                value=""
                label="End Time"
                classname="input"
              />
            </div>
          </div>
          <div className="btn-parent">
            <button className="submit btn edit" onClick={onSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
