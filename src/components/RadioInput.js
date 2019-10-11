import React from "react";

export default ({ label, onChangeHandler, name, value, checked}) => (
    <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name={name} value={value} checked={checked} onChange={onChangeHandler} />
        <label className="form-check-label">{label}</label>
    </div>
)