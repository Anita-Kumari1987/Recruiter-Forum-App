import logo from "../assets/logo.png";

function RecuiterGreet() {
  return (
    <header
      className="w-full flex items-center justify-between bg-transparent bg-opacity-40 shadow-2xl p-4 fixed top-0 left-0 z-30"
      role="banner"
      aria-label="Recruiter greeting and navigation"
    >
      <div className="flex items-center gap-3 ml-3">
        <img
          src={logo}
          alt="FlexJobs Company Logo"
          className="w-30 h-12 rounded pr-3"
        />
        <h1
          className="text-gray-300 font-semibold text-3xl"
          aria-label="Greeting message for recruiter Anita"
        >
          Hello Anita,
          <span className="text-amber-600"> Welcome to FlexJobs</span>
        </h1>
      </div>

      <button
        className="bg-amber-950 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition duration-300 mr-4 focus:outline-none focus:ring-2 focus:ring-amber-500"
        aria-label="Sign out of recruiter dashboard"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            console.log("Sign out clicked");
          }
        }}
      >
        Sign Out
      </button>
    </header>
  );
}

export default RecuiterGreet;
