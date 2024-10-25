import bg from '../../Image/bg-shadow.png';
import bannerLogo from '../../Image/banner-main.png';

const Banner = ({ handelIncreasCoin }) => {
  return (
    <div className="relative mx-auto w-11/12 flex flex-col items-center my-10">
      {/* Background Image */}
      <img
        className="bg-gray-800 my-6 rounded-md  w-full object-cover"
        src={bg}
        alt="Background"
      />

      <div className="absolute top-4 md:top-20 left-1/2 transform -translate-x-1/2 text-center  w-full px-4 h-full pb-6">
        <div className="w-10 sm:w-16 md:w-24 mx-auto my-4">
          <img className="w-full" src={bannerLogo} alt="Banner Logo" />
        </div>

        <h2 className="text-sm font-normal md:text-3xl  text-white">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h2>

        <p className="text-sm my-2 md:my-4  text-gray-300">
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
