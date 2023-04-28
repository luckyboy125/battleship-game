import SmallHit from '../assets/Hit small.png';
import { shipImgTypes } from '../config/const';
import './ShipDes.css';

interface ShipDesProp {
  shipData: ShipType;
}

const ShipDes = ({ shipData }: ShipDesProp) => {
  return (
    <div className='shipDes'>
      {Object.entries(shipData).map((data) => {
        return (
          <div className='item' key={`ship-type-${data[0]}`}>
            <img src={shipImgTypes[data[0]]} />
            <div className='size'>
              {Array.from(Array(data[1].size).keys()).map((_, key) => {
                return <img src={SmallHit} key={`hit-${key}`} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShipDes;
