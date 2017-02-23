import React from 'react';
import Link from 'next/link';
import Back from 'react-icons/lib/fa/angle-left';
import Archive from 'react-icons/lib/fa/archive';
import { colors } from '../utils/config';

const wrapper = {
  position: 'fixed',
  height: 56,
  width: '100%',
  top: 0,
  background: colors.white,
  boxShadow: '2px 2px 4px rgba(0,0,0,.5)',
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  zIndex: 99,
  cursor: 'pointer',
};

const PostNavbar = ({ archive }) => (
  <div style={wrapper}>
    <Link href="/">
      <div
        style={{
          width: '45%',
          display: 'flex',
          flexFlow: 'flow nowrap',
          alignItems: 'center',
          cursor: 'pointer',
        }}
      >
        <Back size={45} />
        <img height={45} src="/static/logo.svg" alt="Início" style={{ maxHeight: 45 }} />
      </div>
    </Link>
    <div className="right">
      {archive &&
        <Link href="/arquivo">
          <div
            style={{
              display: 'flex',
              flexFlow: 'flow nowrap',
              alignItems: 'center',
              paddingRight: 30,
              cursor: 'pointer',
            }}
          >
            <Archive size={20} style={{ marginRight: 5 }} />
            BLOG
          </div>
        </Link>
      }
    </div>
    <style jsx>{`
      @media(min-width: 768px) {
        .right {
          width: 50%;
          display: flex;
          flex-flow: row nowrap;
          justify-content: flex-end;
        }   
      }
    `}</style>
  </div>
);

export default PostNavbar;
