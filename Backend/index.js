let express = require("express");
let app = express();
let mongoose = require("mongoose");
const {
  jobListingInsert,
  jobListingList,
  jobListingDelete,
  jobListingUpdate,
  findSingleJobListing,
} = require("./App/controllers/web/jobListingController.js");
require("dotenv").config();
app.use(express.json());
const cors = require("cors");
app.use(cors());

app.post("/api/joblisting-insert", jobListingInsert);

app.get("/api/jobListing-list", jobListingList);

app.get("/api/singleJobListing/:id", findSingleJobListing);

app.delete("/api/jobListing-delete/:id", jobListingDelete);

app.put("/api/jobListing-update/:id", jobListingUpdate);

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT, () => {
      console.log("Server is running on the port " + process.env.PORT);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
