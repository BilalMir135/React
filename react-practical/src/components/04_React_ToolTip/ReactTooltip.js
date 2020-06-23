import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

export default function ReactTooltip() {
  return (
    <div>
      <Tippy content='Basic Tooltip'>
        <button>Hover</button>
      </Tippy>
    </div>
  );
}
