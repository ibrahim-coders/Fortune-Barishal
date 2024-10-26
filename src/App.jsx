import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import AllPlayers from './Components/Players/AllPlayers';
import Footer from './Components/Footer/Footer';
import { useEffect, useState } from 'react';

function App() {
  const [activeBtn, setButton] = useState({
    btn: true,
    status: 'available',
  });

  const handleButtonClick = status => {
    if (status === 'available') {
      setButton({
        btn: true,
        status: 'available',
      });
    } else {
      setButton({
        btn: false,
        status: 'selected',
      });
    }
  };

  // increase coins
  const [countIncrease, setIncrease] = useState(0);

  const handelIncreasCoin = () => {
    const newCount = countIncrease + 5000;
    setIncrease(newCount);
    toast.success(
      `Congratulations! You have received 5000 coins! Total coins: ${newCount}`
    );
  };

  // Remaining coin and price
  const [price, setPrice] = useState(0);

  const handelRemanigCoin = playerPrice => {
    if (countIncrease >= playerPrice) {
      setPrice(playerPrice);

      setIncrease(countIncrease - playerPrice);
      return true;
    } else {
      toast.error('Not enough coins!');
      return false;
    }
  };

  console.log(price);
  const [countPlayers, setPlayers] = useState([]);

  useEffect(() => {
    fetch('./fake.json')
      .then(res => res.json())
      .then(data => setPlayers(data.players));
  }, []);

  const [selectedPlayers, setSelectedPlayers] = useState([]);

  //choose Players
  const handleChoosePlayers = player => {
    const playerExists = selectedPlayers.find(p => p.id === player.id);

    if (playerExists) {
      toast.warn('Player is already selected');
    } else if (countIncrease <= player.biddingPrice) {
      toast.error('You do not have enough coins!');
    } else if (selectedPlayers.length >= 6) {
      toast.error('You can only select up to 6 players!');
    } else {
      handelRemanigCoin(player.biddingPrice);
      toast.success(
        `Congratulations! ${player.name} has been added to your team!`
      );
      const newPlayers = [...selectedPlayers, player];
      setSelectedPlayers(newPlayers);
    }
  };
  //delete players
  const handleRemovePlayer = id => {
    handleSumPrice(id);
    const removes = selectedPlayers.filter(remove => remove.id != id);
    toast.success(
      `Congratulations! ${removes.name} has been removed from your team!`
    );
    setSelectedPlayers(removes);
  };

  const handleSumPrice = id => {
    const playerToRemove = selectedPlayers.find(p => p.id === id);

    setIncrease(playerToRemove.biddingPrice + price);
  };

  const addMorePlers = () => {
    setButton({ btn: true });
  };
  return (
    <>
      <div className="max-w-screen-xl container w-11/12 mx-auto"> </div>
      <ToastContainer position="top-center" autoClose={3000} />
      <Header countIncrease={countIncrease} price={price}></Header>
      <Banner handelIncreasCoin={handelIncreasCoin}></Banner>

      <AllPlayers
        handleButtonClick={handleButtonClick}
        activeBtn={activeBtn}
        countPlayers={countPlayers}
        handleChoosePlayers={handleChoosePlayers}
        selectedPlayers={selectedPlayers}
        handleRemovePlayer={handleRemovePlayer}
        addMorePlers={addMorePlers}
      ></AllPlayers>

      <Footer></Footer>
    </>
  );
}

export default App;
