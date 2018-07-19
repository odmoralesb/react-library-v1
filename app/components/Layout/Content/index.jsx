import React, { Component } from 'react';
import Proptypes from 'prop-types';


class Content extends Component {

  static propTypes = {
      body: Proptypes.object.isRequired
  };

  render() {

    const { body } = this.props;

    return (
      <div>
          { body }      
      </div>
    );
  }
}

export default Content;