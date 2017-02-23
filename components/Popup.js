import React from 'react';
import Vert from 'react-icons/lib/md/more-vert';
import ClickOutside from 'react-click-outside';

const Popup = ({ items, openState, open, close }) => {
  return (
    <ClickOutside onClickOutside={close}>
      <div className="wrapper">
        <button className="button" onClick={open}>
          <Vert height={20} width={20} />
        </button>
        <div
          style={{
            position: 'absolute',
            boxShadow: '2px 4px 4px rgba(0,0,0,0.5)',
            top: 50,
            right: 135,
            padding: '30px 25px',
            marginRight: -65,
            background: '#fff',
            display: openState ? 'flex' : 'none',
            flexFlow: 'column',
            alignItems: 'middle',
            transition: 'all 0.5s ease-in-out',
            transform: openState ? 'translateY(0)' : 'translateY(-50px)',
          }}
        >
          {items}
        </div>
        <style jsx>{`
          .wrapper {
            display: block;
          }
          .button {
            padding: 4px;
            border-radius: 50%;
            min-height: 20px;
            min-width: 20px;
            text-align: center;
          }
          .button:hover: {
            background-color: rgba(0,0,0,0.2);
          }
          .button:focus: {
            border-radius: 50%;
            border: none;
          }
          @media(min-width: 768px) {
            .wrapper {
              display: none;
            }
          }
        `}</style>
      </div>
    </ClickOutside>
  );
};

export default Popup;


