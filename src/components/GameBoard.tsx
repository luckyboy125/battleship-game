import GameBoardRow from './GamBoardRow/GameBoardRow';
import './GameBoard.css';

const GameBoard = () => {
  return (
    <div className='gameBoard'>
      {Array.from(Array(10).keys()).map((_, key) => {
        return <GameBoardRow key={`gameboardrow-${key}`} rowNumber={key} />;
      })}
    </div>
  );
};

export default GameBoard;
