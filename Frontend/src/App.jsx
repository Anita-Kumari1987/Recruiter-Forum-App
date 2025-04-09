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
    try {
      const response = await axios.post(
        "http://127.0.0.1:3000/api/jobListing-insert",
        formData
      );
      if (response.data.status === 404) {
        alert("Job-listing already exist");
        resetForm;
      } else if (response.data.status === 200) {
        console.log("Server Response:", response.data);
        toast.success("Form submitted successfully!");
        fetchJobs();
        resetForm();
      } else {
        alert("Bad request");
        resetForm();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("problem in submitting the form.");
    }
  };
  return (
    <main className="mainDiv">
      <ToastContainer />
      <header>
        <h2 className="formHeading">RECRUITER FORUM</h2>
      </header>
      <div className="recruiterSection">
        <section>
          <FormHeading />
          <JobListingForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            formData={formData}
          />
        </section>
        <section>
          <h2 className="sr-only">My Job Listings</h2>
          <MyJobListingsList jobLists={jobLists} fetchJobs={fetchJobs} />
        </section>
      </div>
    </main>
  );
}

export default App;
