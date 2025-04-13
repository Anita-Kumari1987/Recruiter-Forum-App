import axios from "axios";
import "../Style/MyJobListing.css";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2/dist/sweetalert2.js";

function MyJobListingsList({ jobLists, fetchJobs, setFormData }) {
  const handleDelete = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Do you want to delete the job-List?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Delete",
        denyButtonText: `Don't delete`,
      });

      if (result.isConfirmed) {
        const response = await axios.delete(
          `http://localhost:3000/api/jobListing-delete/${id}`
        );
        if (response.status === 200 || response.status === 204)
          Swal.fire("Deleted!", "The job listing has been deleted.", "success");
        toast.success("Data deleted successfully");
        fetchJobs();
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    } catch (error) {
      console.error("Delete failed:", error);
      Swal.fire("Deleted!", "The job listing has been deleted.", "success");
    }
  };

  let handleEdit = (id) => {
    axios
      .get(`http://localhost:3000/api/singleJobListing/${id}`)
      .then((res) => {
        let data = res.data;
        console.log(res.data);
        setFormData(data.singleJobListing);
      });
  };
  return (
    <>
      <h2 className="text-3xl font-bold text-indigo-700 mb-6 text-center pb-2">
        My Job Listings
      </h2>
      {jobLists.length === 0 ? (
        <p>No job listings found.</p>
      ) : (
        <table className="min-w-full table-auto border border-gray-300 mt-4">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">Sr.No.</th>
              <th className="border px-4 py-2">Company Name</th>
              <th className="border px-4 py-2">Job Code</th>
              <th className="border px-4 py-2">Job Title</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobLists.map((jobs, index) => (
              <tr key={jobs._id} className="text-center border">
                <td className=" px-4 py-2">{index + 1}</td>
                <td className=" px-4 py-2">{jobs.CompanyName}</td>
                <td className=" px-4 py-2">{jobs.JobCode}</td>
                <td className=" px-4 py-2">{jobs.JobTitle}</td>
                <td className=" px-4 py-2 space-x-8">
                  <button
                    onClick={() => handleEdit(jobs._id)}
                    className="bg-blue-600 text-white px-8 py-2 rounded-lg hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(jobs._id)}
                    className="bg-red-500 text-white px-10 py-2 rounded-lg hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
export default MyJobListingsList;
