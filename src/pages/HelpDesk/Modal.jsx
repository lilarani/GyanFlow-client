const Modal = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex justify-center items-center">
      <div className="bg-[#1a1a2e] rounded-xl p-6 w-full max-w-lg relative">
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
          onClick={onClose}
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
