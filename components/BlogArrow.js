import React from 'react';
import IconL from 'react-icons/lib/fa/angle-left';
import IconR from 'react-icons/lib/fa/angle-right';
import { colors } from '../utils/config';

const getDir = prev => prev ? { left: 10 } : { right: 10 };

const Arrow = ({ prev, color, onClick }) => <div className="wrapper" style={getDir(prev)}>
  {prev && <IconL color={'#fff'} size={35} onClick={onClick} />}
  {!prev && <IconR color={'#fff'} size={35} onClick={onClick} />}
  <style jsx>{`
    .wrapper {
      display: block;
      top: 50%;
      cursor: pointer;
      transform: translate(0, -50%);
      position: absolute;
      z-index: 99;
      background: ${colors.orange};
      padding: 5px;
      border-radius: 50%;
    }
    
    @media(min-width: 968px): {
        [prev ? left : right]: -35;
    }
  `}</style>
</div>;

export default Arrow;