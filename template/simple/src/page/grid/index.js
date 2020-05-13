import React from 'react';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

import './index.scss';

export default function Grid({ children }) {
  return <div className="grid">{children}</div>;
}
