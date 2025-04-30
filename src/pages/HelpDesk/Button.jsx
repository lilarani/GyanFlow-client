const Button = ({ text, onClick }) => (
  <button
    onClick={onClick}
    className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold transition"
  >
    {text}
  </button>
);

export default Button;
