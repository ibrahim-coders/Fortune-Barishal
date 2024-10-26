import PropTypes from 'prop-types';
import { FaFlag } from 'react-icons/fa';
const Players = ({ players, handleChoosePlayers }) => {
  const {
    battingType,
    biddingPrice,
    bowlingType,
    country,
    image,
    name,
    playerId,
    role,
    id,
  } = players;
  return (
    <>
      <div className="flex justify-center items-center  ">
        <div className="max-w-sm w-full p-6 rounded-xl bg-white shadow-[rgba(0,0,0,0.12)_0px_1px_3px,rgba(0,0,0,0.24)_0px_1px_2px]">
          <div className="flex justify-center mb-4">
            <img
              src={image}
              alt="Profile"
              className="rounded-xl w-full h-48 "
            />
          </div>

          <div className="flex items-center mb-4">
            <img
              className="w-10 h-10 rounded-full border border-gray-300"
              src={image}
              alt="Avatar"
            />
            <h2 className="ml-4 text-lg font-semibold text-gray-800">{name}</h2>
          </div>

          <div className="flex justify-between items-center mb-4">
            <h3 className="flex items-center gap-2  text-gray-700 text-xl">
              <FaFlag className="text-gray-500" /> {country}
            </h3>
            <button className="bg-slate-200 px-4 py-2 rounded-md text-gray-600 text-sm  hover:bg-orange-600 hover:text-white">
              {role}
            </button>
          </div>

          <div className="border-t border-slate-200 my-4"></div>

          <h2 className="text-gray-800 text-lg font-semibold mb-2">Rating</h2>
          <div className="flex justify-between gap-4 ">
            <h2 className="text-gray-800  text-xl">{battingType}</h2>
            <h2 className="text-gray-400 text-md">{bowlingType}</h2>
          </div>
          <div className="flex justify-between items-center  py-2 bg-white">
            <h2 className="text-gray-800 font-medium text-xl md:text-xl">
              Price:$ {biddingPrice}
            </h2>
            <button
              onClick={() => handleChoosePlayers(players)}
              className="shadow-[rgba(0,0,0,0.12)_0px_1px_3px,rgba(0,0,0,0.24)_0px_1px_2px] rounded-md hover:bg-orange-600 hover:text-white text-gray-600 text-lg md:text-xl transition-colors duration-300 ease-in-out  bg-white p-2"
            >
              Choose Player
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

Players.propTypes = {
  Players: PropTypes.array,
  players: PropTypes.func,
  handleChoosePlayers: PropTypes.func,
};
export default Players;
