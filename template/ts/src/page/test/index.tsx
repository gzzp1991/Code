import React from 'react';
import moment from 'moment';
import './index.scss';

export default function Test() {
  return <div className="aaa">test111 {moment().format('HH:mm:ss')}</div>;
}
