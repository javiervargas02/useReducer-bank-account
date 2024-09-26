export default function Button({ children, disabled = false, dispatch }) {
  return (
    <button
      disabled={disabled}
      onClick={() => dispatch()}
      className="bg-[#7f00ff] enabled:hover:bg-[#984cf0] text-white w-full py-3 rounded-lg shadow-lg duration-200 disabled:opacity-50 disabled:cursor-not-allowed">
      {children}
    </button>
  );
}
