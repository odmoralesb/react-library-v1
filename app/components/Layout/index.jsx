import React, { Component } from 'react';
import Proptypes from 'prop-types';


//Components
import Header from './Header';
import Content from './Content';
import Footer from './Footer';


class Layout extends Component {

  static propTypes = {
    children: Proptypes.object.isRequired
  };


  render() {

    const { children } = this.props;

    return (
      <div>
        <Header title="React Library" />
        <Content body = { children } />
        <Footer copyright="&copy; Desarrollado para Dev - Hack 2017 By David Morales and Jewison  Garcia"/>
      </div>
    );
  }
}

export default Layout;