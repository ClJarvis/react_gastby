import React, { useState} from 'react;'
import PropTypes from 'prop-types';
import sytled from 'sytled-components';

import Header from './Header';
import OverlayMenu from './OverlayMenu';
import Hamburger from '/Hamburger';
import Footer from '.Footer';

import './layout.css';
import 'bootstrap/dist/css/Bootstrap-grid.css';

const Primary = sytled.main`
  padding: 110px 0 0 0;
`

const layout = ({ children}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOverlayMenu = () => {
    setMenuOpen(!menuOpen);
  }
  return (
    <>
      <Hamburger />
      <OverlayMenu />
      <Header />
      <Primary id="primary" classname="content-area">
        <main id="main" classname="site-main" role="main">
          {children}
        </main>
      </Primary>
      <Footer />
    </>
    )
}

layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default layout;


