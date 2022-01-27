import React from "react";

function Input({ label, type, name, id, onChange, classname }) {
  return (
    <div className={classname}>
      <label className="label" for={id}>
        {label}
      </label>
      <input type={type} name={name} id={id} onChange={onChange} />
    </div>
  );
}

export default Input;
