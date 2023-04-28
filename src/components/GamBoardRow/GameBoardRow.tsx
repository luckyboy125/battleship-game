import GameBoardCell from './GameBoardCell/GameBoardCell';
import './GameBoardRow.css';

const GameBoardRow = () => {
  return (
    <div className='gameBoardRow'>
      {Array.from(Array(10).keys()).map((_, key) => {
        return <GameBoardCell key={`gameboardcell-${key}`} />;
      })}
    </div>
  );
};

export default GameBoardRow;
