import React, { useState, useEffect } from "react";

function Meeting({ meeting, deleteMeet, setActive, setEditFlag }) {
  const handleEdit = () => {
    setEditFlag((prev) => !prev);
    setActive(meeting);
    console.log("ran");
  };

  const findAmPm = (s) => {
    let time = s.split(":");
    let hours = time[0];
    let minutes = time[1];

    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12;

    return `${hours}:${minutes} ${ampm}`;
  };

  findAmPm("13:47");

  return (
    <div className="meeting">
      <div className="title">{meeting.title}</div>
      <div className="description">{meeting.description}</div>
      <div className="date">
        <p>{new Date(meeting.date).toDateString()}</p>
      </div>
      <div className="slot">
        {`${findAmPm(meeting.stime)} : ${findAmPm(meeting.etime)}`}
      </div>

      <div className="btn-control">
        <button className="btn edit" id="myBtn" onClick={handleEdit}>
          Edit
        </button>
        <button className="btn delete" onClick={() => deleteMeet(meeting._id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Meeting;
