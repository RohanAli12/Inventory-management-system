import React from 'react'

const Button = ({btnContent, color, backgroundColor, border, icon, paddingInline = "16px", paddingBlock = "4px"}) => {
  return (
    <button style={{backgroundColor, color, border, paddingInline, paddingBlock }} className="font-semibold text-sm rounded-[3px] select-none">{btnContent ? btnContent : null}{icon ? icon : null}</button>
  )
}

export default Button