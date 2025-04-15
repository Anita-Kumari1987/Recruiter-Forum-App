# 🌐 Flexjobs

## **Flexjobs** is a fullstack recruitment platform designed for both recruiters as well as the job seekers, similar to LinkedIn. The idea behind this website is to craete a platform where 'job-seekers' can go and find the available job opportunities and 'recruiters' can log-in, publish and manage the jobs. The page shown in the project is recruiter-Dashbord, which appears after recruiter's log-in, named as 'Recruiter Forum'. It has two mejore seection. left section shows a form to submit/publish the job and second section shows the list of all jobs published by logged-in recruiter. The recruiter can update or delete the job-listing. This project had been made with a modern tech stack using Node.js, MongoDB, React, Vite, and Tailwind CSS.

---

## 🚀 Features

- 📝 Post new job listings
- 📋 View jobs posted by the logged-in recruiter
- ✏️ Edit or delete job listings
- ✅ Toast notifications for user updates
- 🧠 SweetAlert modals for confirmations

---

## 🛠️ Tech Stack

### 🔹 Frontend

- React
- Vite
- Tailwind CSS
- Toast (react-toastify or similar)
- SweetAlert2 (`Swal.fire`)
- Common CSS (for global tweaks)

### 🔹 Backend

- Node.js
- Express.js
- MongoDB (via Mongoose)
- dotenv (for environment variable management)

---

## 📁 Folder Structure

FULLSTACK-PrROJECT/
├── Backend/
│ ├── App/
│ │ └── controllers/
│ │ ├── admin/
│ │ └── web/
│ │ └── jobListingController.js
│ ├── models/
│ │ └── jobListing.model.js
│ ├── node_modules/
│ ├── .env
│ ├── index.js
│ ├── package.json
│ └── package-lock.json
│
├── Frontend/
│ ├── node_modules/
│ ├── public/
│ │ └── vite.svg
│ ├── src/
│ │ ├── assets/
│ │ │ ├── bg_recruiter.mp4
│ │ │ ├── logo.png
│ │ │ └── react.svg
│ │ ├── Components/
│ │ │ ├── Form_Heading.jsx
│ │ │ ├── Form_Input.jsx
│ │ │ ├── Form_TextArea.jsx
│ │ │ ├── Form.jsx
│ │ │ ├── Greet.jsx
│ │ │ └── MyJobListing.jsx
│ │ ├── Style/
│ │ │ ├── App.css
│ │ │ ├── MyJobListing.css
│ │ │ └── index.css
│ │ ├── App.jsx
│ │ ├── main.jsx
│ ├── index.html
│ ├── package.json
│ ├── package-lock.json
│ ├── .gitignore
│ └── eslint.config.js
│ ├── README.md
│ └── vite.config.js

---

## 🔧 Setup Instructions

### 1. Clone the repo

https://github.com/Anita-Kumari1987/Recruiter-Forum-App.git
