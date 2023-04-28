export const positionValidCheck = (
  shipPosition: ShipPosition[],
  xPosition: number,
  yPosition: number
) => {
  return shipPosition.some(
    (shipPositionArray) =>
      JSON.stringify(shipPositionArray) ===
      JSON.stringify([xPosition, yPosition])
  );
};

export const getAllshipsPosition = (shipData: ShipPositionData[]) => {
  let _allShipPositions: ShipPosition[] = [];
  Object.entries(shipData).map((ship) => {
    _allShipPositions = [..._allShipPositions, ...ship[1].positions];
  });
  return _allShipPositions;
};
