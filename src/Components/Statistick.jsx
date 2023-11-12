import React, { useEffect } from 'react'
import { STATE } from '../Redux/action'

const Statistick = ({stats}) => {
useEffect(()=>{
STATE(stats)
},[stats])
  return (
    <div>
      
    </div>
  )
}

export default Statistick

