import { createContext } from 'react';

export const ShipsPositionContext = createContext<PlayStatus>({
  hitCount: 0,
  positions: [],
  setHitCount: () => {},
});
