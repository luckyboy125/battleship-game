declare interface ShipType {
  carrier: { size: number; count: number };
  battleship: { size: number; count: number };
  cruiser: { size: number; count: number };
  submarine: { size: number; count: number };
  destroyer: { size: number; count: number };
}

declare interface ShipPosition {
  [number, number];
}

declare interface ShipPositionData {
  ship: string;
  positions: ShipPosition[];
}

declare interface ShipDataType {
  shipTypes: ShipType;
  layout: ShipPosition[];
}
