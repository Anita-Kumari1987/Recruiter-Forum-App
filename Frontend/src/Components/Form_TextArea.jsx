function FormTextArea({ label, name, value, onChange }) {
  return (
    <div className="grid grid-cols-3 items-start gap-4">
      <label className="text-right font-medium text-gray-700">{label}</label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        required
        className="col-span-2 px-4 py-2 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  );
}
export default FormTextArea;
