const CustomButtons = ({ primaryText, secondaryText }) => {
  return (
    <div className="gap-3 flex text-base">
      <button className="px-4 py-2 bg-blue-500 hover:border-blue-500 hover:border-[1px] hover:text-blue-500 hover:bg-transparent">
        {primaryText}
      </button>
      <button className="border-blue-500 border-[1px] text-blue-500 px-4 py-2 hover:bg-blue-500 hover:text-white">
        {secondaryText}
      </button>
    </div>
  );
};

export default CustomButtons;
