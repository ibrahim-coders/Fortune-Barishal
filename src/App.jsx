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
  console.log(activeBtn);

  return (
    <>
      <div className="w-11/12 mx-auto">
        <Header></Header>
        <Banner></Banner>
        <AllPlayers
          handleButtonClick={handleButtonClick}
          activeBtn={activeBtn}
        ></AllPlayers>
      </div>
    </>
  );
}

export default App;
