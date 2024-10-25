import { MdDeleteOutline } from 'react-icons/md';
import PropTypes from 'prop-types';
const Selectors = ({ selectedPlayers, handleRemovePlayer }) => {
  console.log(selectedPlayers);
  return (
    <div className="w-full p-4">
      {selectedPlayers.map(p => (
        <div
          key={p.id}
          className="flex justify-between items-center bg-white p-4 mb-4 rounded-lg shadow-[rgba(0,0,0,0.12)_0px_1px_3px,rgba(0,0,0,0.24)_0px_1px_2px] md:flex-row flex-col gap-4"
        >
          <div className="flex items-center gap-4">
            <img
              className="w-12 h-12 rounded-lg object-cover"
              src={p.image}
              alt={p.name}
            />
            <div className="text-left">
              <h2 className="text-lg font-semibold text-gray-800">{p.name}</h2>
              <p className="text-sm text-gray-600">{p.battingType}</p>
            </div>
          </div>
          <button
            className="text-red-500 hover:text-red-700 transition duration-300 ease-in-out"
            onClick={() => handleRemovePlayer(p.id)}
            aria-label="Remove Player"
          >
            <MdDeleteOutline className="w-6 h-6" />
          </button>
        </div>
      ))}

      <button className="bg-red-500 hover:text-red-700 px-4 py-2 text-white transition duration-300 ease-in-out">
        Click
      </button>
    </div>
  );
};

Selectors.PropTypes = {
  selectors: PropTypes.object,
  selectedPlayers: PropTypes.func,
  handleRemovePlayer: PropTypes.func,
};

export default Selectors;
