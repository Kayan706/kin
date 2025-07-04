import React from 'react'

function Button({ className, children, disabled, type, onClick}) {
  return (
    <button type={type} disabled={disabled} className={className} onClick={onClick} >{children}</button>
    
  )
}

export default Button