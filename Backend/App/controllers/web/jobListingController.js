let jobListingModel = require("../../models/jobListing.model.js");
const jobListingInsert = async (req, res) => {
  try {
    const { CompanyName, JobCode, JobTitle, JobDetails } = req.body;
    const existingJob = await jobListingModel.findOne({ JobCode });
    if (existingJob) {
      return res.status(208).json({
        status: 208,
        message: "Job with this JobCode already exists",
      });
    }
    const jobListing = new jobListingModel({
      CompanyName,
      JobCode,
      JobTitle,
      JobDetails,
    });

    await jobListing.save();

    res.status(201).json({
      status: 201,
      message: "Job Listing created successfully",
    });
  } catch (err) {
    console.error("Error creating job listing:", err);
    res.status(500).json({
      status: 500,
      message: "Error while creating job listing",
      error: err.message,
    });
  }
};

let jobListingList = async (req, res) => {
  try {
    const listOfJobListing = await jobListingModel.find();

    if (!listOfJobListing || listOfJobListing.length === 0) {
      return res.status(404).json({
        status: 404,
        message: "No job listings found",
        data: [],
      });
    }
    res.status(200).json({
      status: 200,
      message: "Job listings fetched successfully",
      data: listOfJobListing,
    });
  } catch (error) {
    console.error("Error fetching job listings:", error);
    res.status(500).json({
      status: 500,
      message: "Internal server error",
      error: error.message,
    });
  }
};

let jobListingDelete = async (req, res) => {
  try {
    let id = req.params.id;
    let jobListingToBeDeleted = await jobListingModel.deleteOne({
      _id: id,
    });
    return res.status(200).json({
      status: 200,
      message: "Job Listing deleted successfully",
      Deleted_data: jobListingToBeDeleted,
    });
  } catch (error) {
    console.error("Error fetching job listing:", error);
    res.status(500).json({
      status: 500,
      message: "Internal server error",
      error: error.message,
    });
  }
};

let findSingleJobListing = async (req, res) => {
  try {
    let id = req.params.id;
    let singleJobListing = await jobListingModel.findOne({ _id: id });

    if (!singleJobListing) {
      return res.status(404).json({
        status: 404,
        message: "Job listing not found",
      });
    }

    return res.status(200).json({
      status: 200,
      singleJobListing,
    });
  } catch (error) {
    console.error("Error fetching job listing:", error);
    return res.status(500).json({
      status: 500,
      message: "Internal server error",
      error: error.message,
    });
  }
};

let jobListingUpdate = async (req, res) => {
  try {
    let jobListingId = req.params.id;
    let { CompanyName, JobCode, JobTitle, JobDetails } = req.body;
    let updateObj = {
      CompanyName: CompanyName,
      JobCode: JobCode,
      JobTitle: JobTitle,
      JobDetails: JobDetails,
    };
    let jobListingToBeUpdated = await jobListingModel.updateOne(
      { _id: jobListingId },
      updateObj
    );
    res.send({
      status: 200,
      message: "Job Listing updated successfully",
      updated_Data: jobListingToBeUpdated,
    });
  } catch (error) {
    console.error("Update failed:", error);
    res.status(500).json({
      status: 500,
      message: "Internal server error",
      error: error.message,
    });
  }
};

module.exports = {
  jobListingInsert,
  jobListingList,
  jobListingDelete,
  findSingleJobListing,
  jobListingUpdate,
};
