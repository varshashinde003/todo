import React from "react";

export default ({ type, value }) => (
    <div className="form-group">
        <input type={type || "submit"} value={value} className="btn btn-primary" />
    </div>
)