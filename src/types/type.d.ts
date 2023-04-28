declare interface ShipType {
  carrier: { size: number; count: number };
  battleship: { size: number; count: number };
  cruiser: { size: number; count: number };
  submarine: { size: number; count: number };
  destroyer: { size: number; count: number };
}

declare interface Position {
  [number, number];
}

declare interface ShipPosition {
  ship: string;
  positions: Position[];
}

declare interface ShipDataType {
  shipTypes: ShipType;
  layout: ShipPosition[];
}
