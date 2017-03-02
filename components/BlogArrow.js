import React from 'react';
import IconL from 'react-icons/lib/fa/angle-left';
import IconR from 'react-icons/lib/fa/angle-right';
import { colors } from '../utils/config';

// const getDir = prev => prev ? { left: 10 } : { right: 10 };

const BlogArrow = ({ prev, color, onClick }) => <div className={prev ? 'wrapper prev' : 'wrapper next'}>
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
    .next {
      right: 5px;
    }
    .prev {
      left: -10px;
    }
    
    @media(min-width: 968px) {
      .next {
        right: -15px;
      }
      .prev {
        left: -35px;
      }
    }
  `}</style>
</div>;

export default BlogArrow;