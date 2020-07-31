/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function FormTextArea({
  label, name, value, onChange,
}) {
  return (
    <div>
      <label>
        {label}
        <textarea
          name={name}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

export default FormTextArea;
