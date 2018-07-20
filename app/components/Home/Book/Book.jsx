import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {

    static propTypes = {

    }

    render() {

        const { book } = this.props;

        return (
            <Fragment>
                {book && (
                    <Fragment>

                    <br />

                    <img src={ book.getIn(['volumeInfo', 'imageLinks', 'small'])  } />

                    <h3>{ book.getIn(['volumeInfo', 'title']) }</h3>
                    <h4>{ book.getIn(['volumeInfo', 'subtitle']) }</h4>

                    <br />

                    <p>
                        { book.getIn(['volumeInfo', 'description']) }                    
                    </p>

                    <br />

                    <hr />

                    </Fragment>
                )}
            </Fragment>

        );
    }

}

export default Book;




