import axios from "axios";
import "../Style/MyJobListing.css";
import { ToastContainer, toast } from "react-toastify";

function MyJobListingsList({ jobLists, fetchJobs }) {
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/jobListing-delete/${id}`);
      toast.success("Data deleted successfully");
      fetchJobs();
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  return (
    <>
      <ToastContainer />
      {jobLists.length === 0 ? (
        <p>No job listings found.</p>
      ) : (
        <ul>
          {jobLists.map((jobs, index) => {
            return (
              <li key={jobs._id} className="myJobList">
                <p>{index + 1}</p>
                <p>{jobs.CompanyName}</p>
                <p>{jobs.JobCode}</p>
                <p>{jobs.JobTitle}</p>
                <button>Edit</button>
                <button onClick={() => handleDelete(jobs._id)}>Delete</button>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
export default MyJobListingsList;
