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
        customClass: {
          popup: "swal2-popup",
        },
        ariaLabel: "Delete confirmation dialog",
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
    <div className="overflow-y-auto max-h-[500px]">
      <h2 className="text-3xl font-bold text-indigo-700 mb-6 text-center pb-2">
        My Job Listings
      </h2>
      {jobLists.length === 0 ? (
        <p>No job listings found.</p>
      ) : (
        <table className="min-w-full table-auto border mt-4">
          <caption className="text-left text-lg font-semibold mb-2 text-black">
            List of submitted job listings
          </caption>
          <thead className="bg-amber-900">
            <tr>
              <th scope="col" className="border px-4 py-2">
                Sr.No.
              </th>
              <th scope="col" className="border px-4 py-2">
                Company Name
              </th>
              <th scope="col" className="border px-4 py-2">
                Job Code
              </th>
              <th scope="col" className="border px-4 py-2">
                Job Title
              </th>
              <th scope="col" className="border px-4 py-2">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {jobLists.map((jobs, index) => (
              <tr key={jobs._id} className="text-center border-b text-black">
                <td className=" px-4 py-2">{index + 1}</td>
                <td className=" px-4 py-2">{jobs.CompanyName}</td>
                <td className=" px-4 py-2">{jobs.JobCode}</td>
                <td className=" px-4 py-2">{jobs.JobTitle}</td>
                <td className=" px-4 py-2 space-x-8">
                  <div className="btn_container">
                    <button
                      onClick={() => handleEdit(jobs._id)}
                      className="bg-blue-600 text-white px-4 py-1 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      aria-label={`Edit job listing for ${jobs.JobTitle}`}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(jobs._id)}
                      className="bg-red-500 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 px-4 py-1 rounded-lg hover:bg-red-600"
                      aria-label={`Delete job listing for ${jobs.JobTitle}`}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
export default MyJobListingsList;
