import React from 'react'

function BtnCom({btnFunction,btnText}) {
  return <button className='btn' onClick={btnFunction}>{btnText}</button>
}

export default BtnCom