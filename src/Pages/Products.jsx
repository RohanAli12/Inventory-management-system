import { useState } from "react";
import TopLabel from "../Components/TopLabel";
import InventoryDetailList from "../Components/InventoryDetailList";
import BottomPaginationContainer from "../Components/BottomPaginationContainer";

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const totalItems = 50;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Array.from({ length: totalItems }).slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  return (
    <div className="flex flex-col items-center h-full justify-start box-border pr-[3%] pb-[3%] bg-[#F8F9FF]">
      <TopLabel label={"Inventory"} isBtnHide={true} />
      <div className="flex flex-col w-full overflow-hidden items-center justify-between box-border">
        <div className="flex flex-col  w-full h-full overflow-hidden items-center justify-start box-border">
          <div className="flex flex-col w-full cursor-pointer box-border">
            <InventoryDetailList width="20%" borderTop="1px solid #118cf0" />
          </div>
          <div className="flex flex-col w-full overflow-y-auto cursor-pointer">
            {currentItems.map((_, index) => (
              <InventoryDetailList key={index} />
            ))}
          </div>
        </div>
        <div className="flex flex-col w-full">
          <BottomPaginationContainer
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            inventoryItems={Array.from({ length: totalItems })}
            itemsPerPage={itemsPerPage}
            setItemsPerPage={setItemsPerPage} // Pass down setItemsPerPage
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
