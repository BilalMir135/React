import React from 'react';
import { FaReact } from 'react-icons/fa';
import { MdAccountBalance } from 'react-icons/md';
import { IconContext } from 'react-icons';

export default function ReactIcons() {
  return (
    <div>
      <FaReact color='red' size='50px' />
      <MdAccountBalance color='red' size='50px' />

      <IconContext.Provider value={{ color: 'orange', size: '50px' }}>
        <FaReact />
        <MdAccountBalance />
      </IconContext.Provider>
    </div>
  );
}
