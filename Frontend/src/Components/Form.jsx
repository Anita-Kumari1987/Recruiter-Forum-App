import FormInput from "./Form_Input";
import FormTextArea from "./Form_TextArea";

function JobListingForm({ handleChange, handleSubmit, formData, resetForm }) {
  return (
    <div
      className="max-w-xl mx-auto mt-10 p-6 bg-orange-50 rounded-2xl border-amber-950 shadow-lg text-black"
      role="region"
      aria-labelledby="job-form-heading"
    >
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
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-8 rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700"
              type="submit"
              aria-label={
                formData._id ? "Update job listing" : "Submit new job listing"
              }
            >
              {formData._id ? "Update" : "Submit"}
            </button>
            <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-8 rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700"
              type="button"
              onClick={resetForm}
              aria-label="Cancel and reset form"
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
