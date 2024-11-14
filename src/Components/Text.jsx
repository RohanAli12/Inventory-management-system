import React from 'react'

const Text = ({text = "Data", fontSize , fontWeight = 300 , width = "15%"}) => {
  return (
    <span style={{fontSize, fontWeight, width}}>{text}</span>
  )
}

export default Text