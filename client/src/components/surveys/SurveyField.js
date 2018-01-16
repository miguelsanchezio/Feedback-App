import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
    return (
        <div className="surveyField">
            <label className="form-label">{label}</label>
            <input className="form-input" {...input} />
            <div className="red-text">
                {touched && error}
            </div>
        </div>
    )
};
