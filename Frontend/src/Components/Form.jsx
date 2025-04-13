import FormHeading from "./Form_Heading";
import FormInput from "./Form_Input";
import FormTextArea from "./Form_TextArea";

function JobListingForm({ handleChange, handleSubmit, formData, resetForm }) {
  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
      <form onSubmit={handleSubmit}>
        <div className="space-y-4 p-4">
          <FormInput
            label="Company Name : "
            name="CompanyName"
            value={formData.CompanyName}
            onChange={handleChange}
          />
          <FormInput
            label="Job Code : "
            name="JobCode"
            value={formData.JobCode}
            onChange={handleChange}
          />
          <FormInput
            label="Job Title : "
            name="JobTitle"
            value={formData.JobTitle}
            onChange={handleChange}
          />
          <FormTextArea
            label="Job Details : "
            name="JobDetails"
            value={formData.JobDetails}
            onChange={handleChange}
          />
          <div className="btn_container">
            <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-8 rounded-lg transition duration-300"
              type="submit"
            >
              {formData._id ? "Update" : "Submit"}
            </button>
            <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-8 rounded-lg transition duration-300"
              onClick={resetForm}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default JobListingForm;
