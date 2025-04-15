import React from "react";
import "./Style/App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import JobListingForm from "./Components/Form";
import FormHeading from "./Components/Form_Heading";
import MyJobListingsList from "./Components/MyJobListing";
import { ToastContainer, toast } from "react-toastify";
import "tailwindcss";
import background from "./assets/bg_recruiter.mp4";
import RecuiterGreet from "./Components/Greet";

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
    <>
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        aria-hidden="true"
        tabIndex="-1"
      >
        <source src={background} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-20 text-white px-6 py-10">
        <RecuiterGreet />
        <header
          className="w-full flex justify-center mb-6 mt-16"
          role="banner"
          aria-label="Recruiter Forum Header"
        >
          <div className="w-full md:max-w-7xl bg-transparent py-10 rounded text-center">
            <h1 className="text-center text-3xl bg-opacity-90 font-bold text-white pt-6 pb-6  pb-6mb-6 formHeading">
              RECRUITER FORUM
            </h1>
          </div>
        </header>
        <main
          className="relative w-full h-full min-h-screen overflow-hidden"
          role="main"
        >
          <div className="flex flex-col md:flex-row justify-center gap-8 max-w-7xl mx-auto recruiterSection">
            <section
              className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md w-full md:w-1/2"
              role="region"
              aria-labelledby="job-form-heading"
            >
              <FormHeading />
              <JobListingForm
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                formData={formData}
                resetForm={resetForm}
              />
            </section>
            <section
              className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md w-full md:w-1/2"
              role="region"
              aria-labelledby="job-form-heading"
            >
              <MyJobListingsList
                jobLists={jobLists}
                fetchJobs={fetchJobs}
                setFormData={setFormData}
              />
            </section>
          </div>
        </main>
        <ToastContainer role="alert" aria-live="assertive" />
      </div>
    </>
  );
}

export default App;
