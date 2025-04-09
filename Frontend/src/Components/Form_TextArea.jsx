function FormTextArea({ label, name, value, onChange }) {
  return (
    <div>
      <label className="">{label}</label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        required
        className=""
      />
    </div>
  );
}
export default FormTextArea;
