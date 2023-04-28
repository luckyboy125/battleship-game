import { useState } from 'react';
import Hit from '../../../assets/Hit small.png';
import Miss from '../../../assets/Miss small.png';
import './GameBoardCell.css';

interface GameBoardCellProps {
  x: number;
  y: number;
  shipPosition: ShipPosition[];
}

const GameBoardCell = ({ x, y, shipPosition }: GameBoardCellProps) => {
  const [initialState, setInitialState] = useState(false);
  return (
    <div className='gameBoardCell' onClick={() => setInitialState(true)}>
      {!initialState ? (
        <></>
      ) : shipPosition.some(
          (subarray) => JSON.stringify(subarray) === JSON.stringify([x, y])
        ) ? (
        <img src={Hit} alt='fire-status' />
      ) : (
        <img src={Miss} alt='fire-status' />
      )}
    </div>
  );
};

export default GameBoardCell;
