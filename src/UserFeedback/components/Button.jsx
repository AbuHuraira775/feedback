import React from 'react'

function Button({btnText,btnFunc}) {
  return <button onClick={btnFunc}>{btnText}</button>
}

export default Button