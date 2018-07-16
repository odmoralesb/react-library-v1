import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';


class Books extends Component {

    static propTypes = {
        getBooks: PropTypes.func.isRequired,
    }


    componentDidMount() {
        this.getData();
    }


    getData = () => {
        const { getBooks } = this.props;
        getBooks();
    };


    render() {

        const { booksData } = this.props;
        const books = booksData.getIn(['books', 'items']);

        console.log('Libros', books);

       return (<Fragment>

            <h3>Lista de libros</h3>

            {books && books.map((book, index) => {
                return(<Fragment key={ book.get('id') }>

                    <div style = {{ float: 'left', width: '25%' }}>

                        <h5>{index + 1} - { book.getIn(['volumeInfo', 'title']) }</h5>

                        <div>
                            <img src={ book.getIn(['volumeInfo', 'imageLinks', 'smallThumbnail']) } />
                        </div>

                    </div>


                </Fragment>);
            })}

        </Fragment>);
    }


}

export default Books;