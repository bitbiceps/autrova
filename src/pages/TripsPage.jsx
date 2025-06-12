import { FaLock } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";

const TripsPage = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white flex flex-col items-center justify-start pt-12 px-4">
        <h1 className="text-[20px] font-semibold text-center mb-6">
          Trip Planner
        </h1>

        <div className="flex flex-col items-center">
          <div className="w-[100px] h-[100px] bg-no-repeat bg-center bg-contain mb-4">
            <FaLock className="text-blue-600 text-6xl mx-auto" />
          </div>

          <button className="bg-[#d34800] hover:bg-[#bb3e00] text-white rounded-full px-6 py-3 text-sm font-semibold w-[410px] mb-5">
            Sign in or create free account
          </button>

          <div className="border border-gray-300 rounded-xl w-[410px] px-5 py-3 flex items-center justify-between cursor-pointer hover:shadow-sm">
            <div>
              <p className="text-sm font-medium">Don't have an account?</p>
              <p className="text-xs text-gray-500">
                Use your itinerary number and email to find a booking
              </p>
            </div>
            <span className="text-lg">›</span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TripsPage;
