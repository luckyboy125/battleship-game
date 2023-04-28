import { useEffect, useState } from 'react';
import GameBoard from './components/GameBoard';
import ShipDes from './components/ShipDes';
import { getAllshipsPosition } from './utils/utils';
import { ShipsPositionContext } from './hooks/ShipsPositionContext';
import CongrateImg from './assets/congrate.gif';
import './App.css';

function App() {
  const staticData = {
    shipTypes: {
      carrier: { size: 5, count: 1 },
      battleship: { size: 4, count: 1 },
      cruiser: { size: 3, count: 1 },
      submarine: { size: 3, count: 1 },
      destroyer: { size: 2, count: 1 },
    },
    layout: [
      {
        ship: 'carrier',
        positions: [
          [2, 9],
          [3, 9],
          [4, 9],
          [5, 9],
          [6, 9],
        ],
      },
      {
        ship: 'battleship',
        positions: [
          [5, 2],
          [5, 3],
          [5, 4],
          [5, 5],
        ],
      },
      {
        ship: 'cruiser',
        positions: [
          [8, 1],
          [8, 2],
          [8, 3],
        ],
      },
      {
        ship: 'submarine',
        positions: [
          [3, 0],
          [3, 1],
          [3, 2],
        ],
      },
      {
        ship: 'destroyer',
        positions: [
          [0, 0],
          [1, 0],
        ],
      },
    ],
  };

  const [hitCount, setHitCount] = useState(0);
  const [completeStatus, setCompleteStatus] = useState(false);

  useEffect(() => {
    if (hitCount === getAllshipsPosition(staticData.layout).length) {
      setCompleteStatus(true);
      const timeoutId = setTimeout(() => {
        setCompleteStatus(false);
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [hitCount]);

  const contextValue: PlayStatus = {
    hitCount: hitCount,
    positions: getAllshipsPosition(staticData.layout),
    setHitCount: setHitCount,
  };

  return (
    <ShipsPositionContext.Provider value={contextValue}>
      <div className='App'>
        <ShipDes shipData={staticData.shipTypes} />
        <GameBoard />
        {completeStatus ? (
          <img src={CongrateImg} className='congrateImg' alt='congrateImg' />
        ) : (
          <></>
        )}
      </div>
    </ShipsPositionContext.Provider>
  );
}

export default App;
