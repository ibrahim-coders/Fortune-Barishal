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

  const [countIncrease, setIncrease] = useState(0);

  const handelIncreasCoin = () => {
    setIncrease(countIncrease + 800000);
  };

  const [price, setPrice] = useState([]);

  const handelRemanigCoin = pr => {
    if (countIncrease >= pr) {
      setPrice(pr);
      setIncrease(countIncrease - pr);
    } else {
      alert('Not enough coins!');
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

  const handleChoosePlayers = player => {
    const playerExists = selectedPlayers.find(p => p.id === player.id);

    if (playerExists) {
      alert('Player is already selected');
    } else {
      handelRemanigCoin(player.biddingPrice);
      handleRemovePlayer(player.biddingPrice);
      const newPlayers = [...selectedPlayers, player];
      setSelectedPlayers(newPlayers);
    }
  };
  // const [count, setsum] = useState([]);

  const handleRemovePlayer = (id, coinsum) => {
    const removes = selectedPlayers.filter(remove => remove.id != id);
    setSelectedPlayers(removes);
    // setIncrease(countIncrease + coinsum);
  };

  return (
    <>
      <div className="max-w-screen-xl container w-11/12 mx-auto"> </div>
      <Header countIncrease={countIncrease} price={price}></Header>
      <Banner handelIncreasCoin={handelIncreasCoin}></Banner>

      <AllPlayers
        handleButtonClick={handleButtonClick}
        activeBtn={activeBtn}
        countPlayers={countPlayers}
        handleChoosePlayers={handleChoosePlayers}
        selectedPlayers={selectedPlayers}
        handleRemovePlayer={handleRemovePlayer}
      ></AllPlayers>

      {/* <Footer></Footer> */}
    </>
  );
}

export default App;
