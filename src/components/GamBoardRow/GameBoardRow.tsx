import GameBoardCell from './GameBoardCell/GameBoardCell';
import './GameBoardRow.css';

interface GameBoardRowProps {
  rowNumber: number;
}

const GameBoardRow = ({ rowNumber }: GameBoardRowProps) => {
  return (
    <div className='gameBoardRow'>
      {Array.from(Array(10).keys()).map((_, key) => {
        return (
          <GameBoardCell key={`gameboardcell-${key}`} x={rowNumber} y={key} />
        );
      })}
    </div>
  );
};

export default GameBoardRow;
