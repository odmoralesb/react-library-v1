import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {

    static propTypes = {
        getBook: PropTypes.func.isRequired,
    }


    componentDidMount() {
        this.getBook();
    }


    getBook = () => {

        const { id } = this.props.match.params
        const { getBook } = this.props

        getBook(id);

    };


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

                    </Fragment>
                )}

                <br />

                <hr />

            </Fragment>

        );
    }

}

export default Book;
