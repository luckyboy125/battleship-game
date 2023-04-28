import { useEffect, useState } from 'react';
import GameBoardRow from './GamBoardRow/GameBoardRow';
import './GameBoard.css';

interface GameBoardProps {
  shipData: ShipPositionData[];
}

const GameBoard = ({ shipData }: GameBoardProps) => {
  const [allShipPosition, setAllShipPosition] = useState<ShipPosition[]>();
  useEffect(() => {
    let _allShipPositions: ShipPosition[] = [];
    Object.entries(shipData).map((ship) => {
      _allShipPositions = [..._allShipPositions, ...ship[1].positions];
    });
    setAllShipPosition(_allShipPositions);
  }, [shipData.length]);
  return (
    <div className='gameBoard'>
      {Array.from(Array(10).keys()).map((_, key) => {
        return (
          <GameBoardRow
            key={`gameboardrow-${key}`}
            shipPosition={allShipPosition || []}
            rowNumber={key}
          />
        );
      })}
    </div>
  );
};

export default GameBoard;
