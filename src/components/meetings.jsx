import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Modal from "./modal";
import Meeting from "./meeting";
import EditModal from "./editModal";

function Meetings() {
  const [flag, setFlag] = useState(false);
  const [editFlag, setEditFlag] = useState(false);

  const [profile, setProfile] = useState(null);
  const [meetings, setMeetings] = useState([]);
  const [meeting, setMeeting] = useState({
    title: "",
    description: "",
    date: "",
    stime: "",
    etime: "",
  });

  const [active, setActive] = useState({
    title: "",
    description: "",
    date: "",
    stime: "",
    etime: "",
    _id: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    let name = e.target.name;
    let value = e.target.value;

    setMeeting((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChangeEdit = (e) => {
    e.preventDefault();
    let name = e.target.name;
    let value = e.target.value;
    if (name === "date") {
      let year = new Date(value).getFullYear();
      let month = new Date(value).getMonth();
      let date = new Date(value).getDate();
      value = `${year}-${month + 1}-${date}`;
      console.log(value);
    }
    setActive((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    fetch(`http://localhost:5000/meeting`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${profile.tokenId}`,
      },
      body: JSON.stringify({ ...meeting, userId: profile.googleId }),
    })
      .then(() => {
        console.log("posted");
      })
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    fetch(`http://localhost:5000/meeting`)
      .then((res) => res.json())
      .then((data) => {
        setMeetings(data);
      })
      .catch((e) => console.log(e.message));
  }, [flag, editFlag]);

  useEffect(() => {
    setProfile(JSON.parse(localStorage.getItem("profile")));
  }, [flag]);

  const deleteFront = (id) => {
    let newArr = meetings.filter((m) => m._id !== id);
    setMeetings(newArr);
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/meeting/${id}`, {
      method: "Delete",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${profile.tokenId}`,
      },
    })
      .then(() => {
        deleteFront(id);
      })
      .catch((e) => console.log(e.message));
  };

  const editMeeting = (id) => {
    let k = { ...active };
    delete k["_id"];

    fetch(`http://localhost:5000/meeting/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${profile.tokenId}`,
      },
      body: JSON.stringify(k),
    })
      .then(() => {
        console.log("Updated.");
        setFlag(false);
      })
      .catch((e) => console.log(e.message));
  };

  var history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem("profile");
    history.push("/");
  };

  return (
    <div>
      <div className="profile">
        <div className="left">
          <img src={profile?.profileObj?.imageUrl} alt="" />
          <p>{profile?.profileObj?.givenName}</p>
        </div>
        <button className="logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div>
        <EditModal
          onSubmit={() => editMeeting(active._id)}
          onChange={handleChangeEdit}
          editFlag={editFlag}
          setEditFlag={setEditFlag}
          setActive={setActive}
          active={active}
          setActive={setActive}
        />
      </div>
      <Modal
        onSubmit={handleSubmit}
        onChange={handleChange}
        setFlag={setFlag}
      />
      <div className="list">
        {meetings.map((m, i) => {
          return (
            <>
              <Meeting
                key={meeting._id}
                meeting={m}
                onSubmit={handleSubmit}
                onChange={handleChange}
                setActive={setActive}
                editFlag={editFlag}
                setEditFlag={setEditFlag}
                deleteMeet={handleDelete}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Meetings;
