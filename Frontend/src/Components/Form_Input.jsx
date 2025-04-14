function FormInput({ label, name, value, onChange }) {
  return (
    <div className="grid grid-cols-3 items-center gap-4">
      <label className="text-right font-medium text-gray-900" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        className="col-span-2 px-4 py-2 border border-gray-700 rounded-lg shadow-sm  focus:ring-2 focus:ring-indigo-500"
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        required
        aria-required="true"
        aria-label={label.replace(/[:\s]+$/, "")}
      />
    </div>
  );
}
export default FormInput;
