import React from 'react'
import PropTypes from 'prop-types'
import './FormInput.scss'

const FormInput = ({ type, name, value, onChange, placeholder, required, error}) => (
  <>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className={!error ? `inputStyle` : 'inputStyle error'}
    />
    {error && <div className="helper">{error ? <span>{error}</span> : null}</div>}
  </>
)

FormInput.propTypes = {
  required: PropTypes.bool,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.string,
}

export default FormInput
