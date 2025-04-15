let mongoose = require("mongoose");
let jobListingSchema = mongoose.Schema({
  CompanyName: {
    type: String,
  },
  JobCode: {
    type: String,
    required: true,
    unique: true,
  },
  JobTitle: {
    type: String,
    required: true,
  },
  JobDetails: {
    type: String,
    required: true,
  },
});
let jobListingModel = mongoose.model("jobListing", jobListingSchema);
module.exports = jobListingModel;
