import React from 'react';
import classnames from 'classnames';

import routeJson from 'Src/route';
import NavItem from './item';
import './index.scss';

const ROOTPATH = '';
const ROOTLEVEL = 1;
const eo = {};
const levelClassName = {
  1: 'nav-first',
  2: 'nav-second',
  3: 'nav-third',
};

export default class Nav extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeOrder: [],
    };
  }

  changeActiveOrder = order => {
    this.setState(({ activeOrder }) => {
      if (!activeOrder.includes(order)) {
        return { activeOrder: [...activeOrder, order] };
      }
      return { activeOrder: activeOrder.filter(o => o !== order) };
    });
  };

  render() {
    const {
      prevpathname = ROOTPATH,
      level = ROOTLEVEL,
      prevIndex = [],
      navs = routeJson,
    } = this.props;
    const { activeOrder } = this.state;

    const levelclassname = levelClassName[level];
    const paths = Object.keys(navs);

    return (
      paths.length > 0 && (
        <div className={classnames('nav', levelclassname)}>
          {paths.map((path, order) => {
            const nav = navs[path];
            const { child = eo } = nav;
            const nowpathname = prevpathname + '/' + path;
            const hasChild =
              typeof child === 'object' && Object.keys(child).length > 0;

            return (
              <React.Fragment key={path}>
                <NavItem
                  // key={path}
                  className={`${levelclassname}-item`}
                  nav={nav}
                  pathname={nowpathname}
                  order={order}
                  index={[...prevIndex, order + 1]}
                  isLeaf={!hasChild}
                  onClick={this.changeActiveOrder}
                />
                {activeOrder.includes(order) && hasChild && (
                  <Nav
                    // key={`${path}-child`}
                    prevpathname={nowpathname}
                    level={level + 1}
                    prevIndex={[...prevIndex, order + 1]}
                    navs={child}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>
      )
    );
  }
}
