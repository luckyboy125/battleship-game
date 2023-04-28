import GameBoardCell from './GameBoardCell/GameBoardCell';
import './GameBoardRow.css';

interface GameBoardRowProps {
  shipPosition: ShipPosition[];
  rowNumber: number;
}

const GameBoardRow = ({ shipPosition, rowNumber }: GameBoardRowProps) => {
  return (
    <div className='gameBoardRow'>
      {Array.from(Array(10).keys()).map((_, key) => {
        return (
          <GameBoardCell
            key={`gameboardcell-${key}`}
            x={rowNumber}
            y={key}
            shipPosition={shipPosition}
          />
        );
      })}
    </div>
  );
};

export default GameBoardRow;
