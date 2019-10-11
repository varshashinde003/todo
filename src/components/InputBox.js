import React from "react";

export default ({ label, name, value, onChangeHandler }) => (
    <div className="form-group">
        <label>{label}: </label>
        <input type="text" className="form-control" name={name} value={value} onChange={onChangeHandler} />
    </div>
)