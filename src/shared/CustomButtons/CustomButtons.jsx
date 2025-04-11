const CustomButtons = ({ primaryText, secondaryText }) => {
  return (
    <div className="gap-3 flex text-base">
      <button className="px-4 py-2 hover:bg-[#0B1739] bg-[#352b61] text-white/80 duration-500">
        {primaryText}
      </button>
      {secondaryText ? (
        <button className="border-blue-500 border-[1px] text-white px-4 py-2 hover:bg-[#130d2a] hover:text-white">
          {secondaryText}
        </button>
      ) : (
        ''
      )}
    </div>
  );
};

export default CustomButtons;
