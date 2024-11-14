
const Sidebartab = ({name, icon}) => {

    return (
      <div className={`flex gap-8 items-center py-4 px-3 cursor-pointer transition-colors select-none`} >
       {icon && <img src={icon} alt={`${name}  icon`} className="w-5 h-5 ml-5 select-none" />}
        <span className=" font-medium">{name}</span>
      </div>
    );
  };
  

export default Sidebartab