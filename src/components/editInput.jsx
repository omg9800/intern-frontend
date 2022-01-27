import React from "react";

function EditInput({ label, type, name, id, onChange, classname, value }) {
  return (
    <div className={classname}>
      <label className="label" for={id}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default EditInput;
