import Hit from '../../../assets/Hit.png';
import Miss from '../../../assets/Miss.png';
import './GameBoardCell.css';

const GameBoardCell = () => {
  return (
    <div className='gameBoardCell'>
      <img src={Hit} alt='fire-status' />
    </div>
  );
};

export default GameBoardCell;
