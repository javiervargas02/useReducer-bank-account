export default function AmountInput({
  label,
  type,
  value,
  dispatch,
  error,
  disabled = false,
}) {
  return (
    <div className="space-y-2">
      <label className="text-white font-semibold">{label}</label>
      <input
        disabled={disabled}
        className="w-full px-4 py-3 rounded-lg border-1 focus:outline-none focus:ring-1 focus:ring-[#e100ff] bg-[#1a1a2e] !border-[#63e] text-white placeholder-gray-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed enabled:hover:border-[#e100ff]"
        type="number"
        placeholder={label}
        value={value}
        onChange={(e) => dispatch({ type, payload: parseInt(e.target.value) })}
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}
