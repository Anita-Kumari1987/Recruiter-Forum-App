import logo from "../assets/logo.png";

function RecuiterGreet() {
  return (
    <div className="w-full flex items-center justify-between bg-transparent bg-opacity-40 shadow-2xl p-4 fixed top-0 left-0 z-30">
      <div className="flex items-center gap-3 ml-3">
        <img src={logo} alt="Company-Logo" className="w-30 h-12 rounded pr-3" />
        <p className="text-gray-300 font-semibold text-3xl">
          Hello Anita,
          <span className="text-black"> Welcome to FlexJobs</span>
        </p>
      </div>
      <button className="bg-amber-950 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition duration-300 mr-4 ">
        Sign Out
      </button>
    </div>
  );
}
export default RecuiterGreet;
