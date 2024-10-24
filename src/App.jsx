import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import AllPlayers from './Components/Players/AllPlayers';
import { useState } from 'react';

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
    setIncrease(countIncrease + 60000000);
  };
  console.log(countIncrease);
  return (
    <>
      <div className="w-11/12 mx-auto">
        <Header countIncrease={countIncrease}></Header>
        <Banner handelIncreasCoin={handelIncreasCoin}></Banner>
        <AllPlayers
          handleButtonClick={handleButtonClick}
          activeBtn={activeBtn}
        ></AllPlayers>
      </div>
    </>
  );
}

export default App;
