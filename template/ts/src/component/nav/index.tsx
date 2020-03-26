import * as React from 'react';
import classnames from 'classnames';

import NavItem from './item';
import routeJson from 'Src/route';
import './index.scss';

const ROOTPATH = '';
const ROOTLEVEL = 1;
const eo = {};
const levelClassName = {
  1: 'nav-first',
  2: 'nav-second',
  3: 'nav-third',
};

interface Props {
  prevpathname?: string;
  level?: number;
  prevOrder?: number[];
  navs?: object;
}

interface State {
  activeOrder: number[];
}

export default class Nav extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      activeOrder: [],
    };
  }

  changeActiveOrder = (order: number) => {
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
      prevOrder = [],
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
                  index={[...prevOrder, order + 1]}
                  isLeaf={!hasChild}
                  onClick={this.changeActiveOrder}
                />
                {activeOrder.includes(order) && hasChild && (
                  <Nav
                    // key={`${path}-child`}
                    prevpathname={nowpathname}
                    level={level + 1}
                    prevOrder={[...prevOrder, order + 1]}
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
