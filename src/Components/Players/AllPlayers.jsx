import PropTypes from 'prop-types';
import Players from '../Player/Players';
import Selectors from '../Selectors/Selectors';
const AllPlayers = ({
  handleButtonClick,
  activeBtn,
  countPlayers,
  handleChoosePlayers,
  selectedPlayers,
  handleRemovePlayer,
}) => {
  return (
    <div className="">
      <div className=" w-11/12 mx-auto flex justify-between text-center my-20">
        {activeBtn.btn ? (
          <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-0">
            Available Players
          </h2>
        ) : (
          <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-0">
            Selected players ({selectedPlayers.length}/6)
          </h2>
        )}
        <div className="flex rounded-xl">
          <button
            onClick={() => handleButtonClick('available')}
            className={`text-base  p-2 md:p-4  ${
              activeBtn.btn ? 'bg-orange-500 text-white' : 'bg-gray-300'
            }`}
          >
            Available
          </button>
          <button
            onClick={() => handleButtonClick('selected')}
            className={`text-base  p-2 md:p-4 ${
              activeBtn.btn ? 'bg-gray-300' : 'bg-orange-500 text-white'
            }`}
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>

      {activeBtn.btn ? (
        <div className="max-w-screen-xl container w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-4">
          {countPlayers.map(players => (
            <Players
              key={players.playerId}
              players={players}
              handleChoosePlayers={handleChoosePlayers}
            ></Players>
          ))}
        </div>
      ) : (
        <Selectors
          selectedPlayers={selectedPlayers}
          handleRemovePlayer={handleRemovePlayer}
        ></Selectors>
      )}
    </div>
  );
};

AllPlayers.propTypes = {
  allPlayers: PropTypes.object,
  activeBtn: PropTypes.object,
  handleButtonClick: PropTypes.func,
  countPlayers: PropTypes.func,
  handelChooesPlyers: PropTypes.func,
  selectedPlayers: PropTypes.array,
  handleRemovePlayer: PropTypes.func,
};
export default AllPlayers;
