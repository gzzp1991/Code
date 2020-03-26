import * as React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

// import 'Css/global.scss';
import './index.scss';

interface Props {
  className?: string;
  nav: PropNav;
  pathname: string;
  order: number;
  index: number[];
  isLeaf: boolean;
  onClick: any;
}

interface PropNav {
  title: string;
  child?: PropNav;
}

export default class NavItem extends React.PureComponent<Props> {
  onClick = () => {
    const { order, onClick } = this.props;
    if (onClick) {
      onClick(order);
    }
  };

  render() {
    const {
      className,
      pathname,
      isLeaf,
      nav: { title },
      index,
    } = this.props;

    const Com = isLeaf ? Link : 'div';

    return (
      <Com
        className={classnames('nav-item', className, {
          ['nav-item-leaf']: isLeaf,
          ['nav-item-notleaf']: !isLeaf,
        })}
        to={pathname}
        title={title}
        onClick={this.onClick}>
        {`${index.join('.')} ${title}`}
      </Com>
    );
  }
}
