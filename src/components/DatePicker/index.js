import React, { useRef, useEffect, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import { useField } from '@rocketseat/unform';

import 'react-datepicker/dist/react-datepicker.css';

export default function DatePicker({ name, placeholder }) {
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [selected, setSelected] = useState(defaultValue);
  const datePickerRef = useRef(null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: datePickerRef.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
  }, [datePickerRef.current, fieldName]); //eslint-disable-line

  return (
    <>
      <ReactDatePicker
        name={fieldName}
        selected={selected}
        onChange={date => setSelected(date)}
        minDate={new Date()}
        showTimeSelect
        timeFormat="HH:mm"
        dateFormat="dd/MM/yyyy - HH:mm"
        ref={datePickerRef}
        placeholderText={placeholder}
        autoComplete="off"
      />
      {error && <span>{error}</span>}
    </>
  );
}

DatePicker.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

DatePicker.defaultProps = {
  placeholder: '',
};
