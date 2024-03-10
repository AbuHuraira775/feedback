import React from 'react'

function InpCom({getData, data,place,type}) {
  return <input type={type} value={data} onChange={(e)=>{getData(e.target.value)}} placeholder={place} />
}

export default InpCom