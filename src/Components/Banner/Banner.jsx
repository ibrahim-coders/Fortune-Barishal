import bg from '../../Image/bg-shadow.png';
import bannerLogo from '../../Image/banner-main.png';

const Banner = ({ handelIncreasCoin }) => {
  return (
    <div className="relative mx-auto w-11/12 flex flex-col items-center">
      {/* Background Image */}
      <img
        className="bg-gray-800 my-6 rounded-md w-full  object-cover"
        src={bg}
        alt="Background"
      />

      <div className="absolute sm:top-10 md:top-20 left-1/2 transform -translate-x-1/2 text-center space-y-2 w-full px-4 h-auto pb-6">
        <div className="w-10 sm:w-16 md:w-24 mx-auto my-4">
          <img className="w-full" src={bannerLogo} alt="Banner Logo" />
        </div>

        <h2 className="text-sm md:text-3xl font-bold text-white">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h2>

        <p className="text-sm md:text-xl  text-gray-300 pb-4">
          Beyond Boundaries Beyond Limits
        </p>

        {/* Button */}
        <div className="border border-orange-300 rounded-lg py-2 w-44 mx-auto focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75 transition duration-300">
          <button
            onClick={handelIncreasCoin}
            className="px-6 py-3 text-sm bg-orange-600 font-medium text-black rounded-lg shadow-md hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75 transition duration-300"
          >
            Claim Free Credit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
