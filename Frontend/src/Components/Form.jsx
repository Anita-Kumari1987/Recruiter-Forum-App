import FormHeading from "./Form_Heading";
import FormInput from "./Form_Input";
import FormTextArea from "./Form_TextArea";

function JobListingForm({ handleChange, handleSubmit, formData }) {
  return (
    <div className="">
      <form onSubmit={handleSubmit} className="">
        <div>
          <FormInput
            label="Company Name"
            name="CompanyName"
            value={formData.CompanyName}
            onChange={handleChange}
          />
          <FormInput
            label="Job Code"
            name="JobCode"
            value={formData.JobCode}
            onChange={handleChange}
          />
          <FormInput
            label="Job Title"
            name="JobTitle"
            value={formData.JobTitle}
            onChange={handleChange}
          />
          <FormTextArea
            label="Job Details"
            name="JobDetails"
            value={formData.JobDetails}
            onChange={handleChange}
          />
          <button type="submit" className="">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
export default JobListingForm;
