function FormInput({ label, name, value, onChange }) {
  return (
    <div>
      <label className="">{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        required
        className=""
      />
    </div>
  );
}
export default FormInput;
