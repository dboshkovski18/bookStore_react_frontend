import React from "react";
import Book from "../Book/book";
import {Link} from "react-router-dom";
import ReactPaginate from "react-paginate";

class Books extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            page: 0,
            size: 6
        }
    }

    render() {

        const pageCount = Math.ceil(this.props.books.length / this.state.size);
        const offset = this.state.size * this.state.page;
        const nextPageOffset = offset + this.state.size;

        const books = this.getBooksPage(offset, nextPageOffset);

        return (
            <div className={"row"}>
                <div className={"col-md-12 mt-2"}>
                    <Link to={"/books/add"} className={"btn btn-outline-dark d-block"}>Add a book</Link>
                </div>
                {
                    books
                }
                <nav >
                    <ReactPaginate previousLabel={"back"}
                                   previousClassName={"page-link btn"}
                                   nextLabel={"next"}
                                   nextClassName={"page-link btn"}
                                   breakLabel={"..."}
                                   breakClassName={"break-me"}
                                   pageClassName={"page-item"}
                                   pageLinkClassName={"page-link"}
                                   pageCount={pageCount}
                                   marginPagesDisplayed={2}
                                   pageRangeDisplayed={5}
                                   onPageChange={this.handlePageClick}
                                   containerClassName={"justify-content-center mt-4 pagination page-item"}
                                   activeClassName={"active"}
                    />

                </nav>

            </div>
        )
    }

    getBooksPage = (offset, nextPageOffset) => {
        return this.props.books.map((book) => {
                return (
                    <Book book={book}
                          onDeleteBook={this.props.onDeleteBook}
                          rentABook={this.props.rentABook}
                          onGetABook={this.props.onGetABook}/>
                )
            }
        ).filter((book, index) => {
            return index >= offset && index < nextPageOffset;
        })
    }

    handlePageClick = (data) => {
        let selected = data.selected;
        this.setState({
            page: selected
        })
    }


}


export default Books;