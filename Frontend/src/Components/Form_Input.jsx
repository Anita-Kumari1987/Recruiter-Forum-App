function FormInput({ label, name, value, onChange }) {
  return (
    <div className="grid grid-cols-3 items-center gap-4">
      <label className="text-right font-medium text-gray-700">{label}</label>
      <input
        className="col-span-2 px-4 py-2 border border-gray-700 rounded-lg shadow-sm  focus:ring-2 focus:ring-indigo-500"
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}
export default FormInput;
