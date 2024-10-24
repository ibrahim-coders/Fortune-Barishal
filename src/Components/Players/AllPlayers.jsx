import PropTypes from 'prop-types';
const AllPlayers = ({ handleButtonClick, activeBtn }) => {
  console.log(handleButtonClick, activeBtn);

  return (
    <div>
      <div className="w-11/12 mx-auto my-6 flex flex-col md:flex-row md:justify-between items-center text-center">
        <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-0">
          Available Players
        </h2>
        <div className="flex gap-10">
          <button
            onClick={() => handleButtonClick('available')}
            className={`text-xl p-4 rounded-lg hover:bg-orange-600 transition duration-300 ${
              activeBtn.available ? 'bg-orange-500' : 'bg-gray-300'
            }`}
          >
            Available
          </button>
          <button
            onClick={() => handleButtonClick('selected')}
            className={`text-xl p-4 rounded-lg hover:bg-orange-600 transition duration-300 ${
              activeBtn.selected ? 'bg-orange-500' : 'bg-gray-300'
            }`}
          >
            Selected
          </button>
        </div>
      </div>
    </div>
  );
};

AllPlayers.propTypes = {
  allPlayers: PropTypes.object,
  activeBtn: PropTypes.object,
  handleButtonClick: PropTypes.func,
};
export default AllPlayers;
