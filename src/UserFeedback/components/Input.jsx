import React from 'react'

function Input({value,getData,type,place}) {
  return  <input 
          type={type}
          placeholder={place}
          value={value}
          getData={getData}
          onChange={(e)=>getData(e.target.value)}/>
}

export default Input