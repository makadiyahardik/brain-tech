import React from 'react'

const TexxtArea = ({id,placeholder,required,error,defaultValue}) => {
  return (
    <div className="form-group form-group-textarea mb-md-0">

    <textarea
      className="form-control"
      id="message"
      placeholder="Your Message *"
      data-sb-validations="required"
      defaultValue={""}
    />
    <div
      className="invalid-feedback"
      data-sb-feedback="message:required"
    >
      A message is required.
    </div>
  </div>
  )
}

export default TexxtArea