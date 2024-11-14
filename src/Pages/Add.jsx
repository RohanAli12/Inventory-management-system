import React from 'react'
import TopLabel from '../Components/TopLabel'

const Add = () => {
  return (
    <div className="flex flex-col items-center h-full justify-start box-border pr-[3%] pb-[3%] bg-[#F8F9FF] gap-3" >
      <TopLabel label={"Add Product (Inventory)"} background= "#118CF033"/>
      <TopLabel label={"Basic Information"}/>
    </div>
  )
}

export default Add