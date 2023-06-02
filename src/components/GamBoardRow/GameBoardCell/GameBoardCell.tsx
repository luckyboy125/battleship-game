import { useContext, useState } from 'react';
import Hit from '../../../assets/Hit small.png';
import Miss from '../../../assets/Miss small.png';
import { ShipsPositionContext } from '../../../hooks/ShipsPositionContext';
import { positionValidCheck } from '../../../utils/utils';
import './GameBoardCell.css';

interface GameBoardCellProps {
  x: number;
  y: number;
}

const GameBoardCell = ({ x, y }: GameBoardCellProps) => {
  const { hitCount, positions, setHitCount } = useContext(ShipsPositionContext);

  const [initialState, setInitialState] = useState(false);

  const handleCellClick = () => {
    positionValidCheck(positions, x, y) && setHitCount(hitCount + 1);
    setInitialState(true);
  };

  return (
    <div className='gameBoardCell' onClick={() => handleCellClick()}>
      {!initialState ? (
        <></>
      ) : positionValidCheck(positions, x, y) ? (
        <img src={Hit} alt='fire-status-image' />
      ) : (
        <img src={Miss} alt='fire-status-image' />
      )}
    </div>
  );
};

export default GameBoardCell;
