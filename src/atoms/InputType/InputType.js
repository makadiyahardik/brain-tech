import React from 'react'

const InputType = ({type,placeholder,id,error,required}) => {
  return (
<>
<input
    classname="form-control w-full"
    id={id}
    type={type}
    placeholder={placeholder}
    data-sb-validations={required}
  />
  <div classname="invalid-feedback" data-sb-feedback="name:required">
   {error}
  </div>
</>
 


  )
}

export default InputType