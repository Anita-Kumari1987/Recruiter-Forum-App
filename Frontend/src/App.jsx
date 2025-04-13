import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import JobListingForm from "./Components/Form";
import FormHeading from "./Components/Form_Heading";
import MyJobListingsList from "./Components/MyJobListing";
import { ToastContainer, toast } from "react-toastify";
import "tailwindcss";

function App() {
  const [formData, setFormData] = useState({
    CompanyName: "",
    JobCode: "",
    JobTitle: "",
    JobDetails: "",
    _id: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const resetForm = () => {
    setFormData({
      CompanyName: "",
      JobCode: "",
      JobTitle: "",
      JobDetails: "",
      _id: "",
    });
  };
  const [jobLists, setJobLists] = useState([]);
  const fetchJobs = () => {
    axios
      .get("http://127.0.0.1:3000/api/jobListing-list")
      .then((response) => {
        setJobLists(response.data.data || []);
        console.log(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData._id) {
      try {
        const response = await axios.put(
          `http://127.0.0.1:3000/api/jobListing-update/${formData._id}`,
          formData
        );
        if (response.data.status === 200) {
          console.log("Server Response:", response.data);
          toast.success("JobListing updated successfully!");
        }
        fetchJobs();
        resetForm();
      } catch (error) {
        console.error("Error updating form:", error);
        toast.error("problem in updating information.");
      }
    } else {
      try {
        const response = await axios.post(
          "http://127.0.0.1:3000/api/jobListing-insert",
          formData
        );
        if (response.data.status === 201) {
          console.log("Server Response:", response.data);
          toast.success("Job-listing added successfully!");
          fetchJobs();
          resetForm();
        } else if (response.data.status === 404) {
          toast.error("c already exist");
          resetForm;
        } else {
          toast.error("Bad request");
          resetForm();
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("problem in submitting the form.");
      }
    }
  };
  return (
    <main className="relative w-full h-full min-h-screen overflow-hidden mainDiv">
      <header>
        <h2 className="text-center text-3xl font-bold text-indigo-600 formHeading">
          RECRUITER FORUM
        </h2>
      </header>
      <div className="recruiterSection">
        <section>
          <FormHeading />
          <JobListingForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            formData={formData}
            resetForm={resetForm}
          />
        </section>
        <section>
          <MyJobListingsList
            jobLists={jobLists}
            fetchJobs={fetchJobs}
            setFormData={setFormData}
          />
        </section>
      </div>
    </main>
  );
}

export default App;
