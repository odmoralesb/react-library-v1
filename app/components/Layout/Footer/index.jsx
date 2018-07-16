import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Footer extends Component {

    static propTypes = {
        copyright: PropTypes.string
    };

    render() {

        const {copyright = '&copy; Crobjobs 2017'} = this.props;

        return (
        <div className="footer">
            <p dangerouslySetInnerHTML={{__html: copyright }}/>
        </div>
        );
    }
}

export default Footer;