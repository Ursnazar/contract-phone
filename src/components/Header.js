import React from 'react';
import classnames from 'classnames';

import '../assets/style/style.scss';

function Header({ children, classActive }) {
  const reloadWindow = () => {
    window.location.reload();
  };

  return (
    <header
      className={classnames({
        active: classActive,
        header: !classActive,
      })}
      onClick={reloadWindow}>
      <div className="header__title">
        <p>{children}</p>
      </div>
    </header>
  );
}

export default Header;
