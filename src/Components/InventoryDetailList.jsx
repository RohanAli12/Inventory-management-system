import Text from "./Text"


const InventoryDetailList = ({Name = "Name", Description = "Description", SKU = "SKU", Type = "Type", Stock = "Stock", Rate = "Rate", width="20%", borderTop}) => {
  return (
    <div style={{borderTop}} className="py-2 h-10 px-4 flex items-center bg-white justify-center border border-x-0 border-t-0 border-b-[#0000001A]">
        <input type="checkbox" className="focus:outline-none focus:border-none mr-5"/>
        <div className="flex w-full items-center justify-center">
            <Text text={Name} fontSize="1rem" fontWeight="500" width={width}/>
            <Text text={Description} fontSize="1rem" fontWeight="500" width={width}/>
            <Text text={SKU} fontSize="1rem" fontWeight="500"/>
            <Text text={Type} fontSize="1rem" fontWeight="500"/>
            <Text text={Stock} fontSize="1rem" fontWeight="500"/>
            <Text text={Rate} fontSize="1rem" fontWeight="500"/>
        </div>
    </div>
  )
}

export default InventoryDetailList