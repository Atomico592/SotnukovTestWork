import React from 'react'

const FormArea = ({ name, value, onChange, placeholder, required, error, cols, rows }) => (
  <>
    <textarea
      cols={cols}
      rows={rows}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className={!error ? `inputStyle textArea` : 'inputStyle error'}
    />
    {error ? <span className="helper">{error}</span> : null}
  </>
)

export default FormArea
