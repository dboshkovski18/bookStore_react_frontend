import React from "react";
import {Link} from "react-router-dom";

const Book = (props) => {

    const [disable, setDisabled] = React.useState(false);

    return (
        <div className={"col-md-4 mt-2"}>
            <div className="card text-center">
                <div className="card-body">
                    <h5 className="card-title">
                        <button className={"btn col-sm-12 btn-lg btn-dark disabled"}>{props.book.name}</button>
                    </h5>
                    <h6 className="card-text">{props.book.author.name + ' ' + props.book.author.surname}</h6>
                    <p className="card-text">{props.book.category}</p>
                    <p className="card-text">Available copies: {props.book.availableCopies}</p>
                    <div className={"btn-group-vertical"}>
                        <span className={"text-info"} hidden={!disable}>You have rented this book!</span>
                        <button id={props.book.id} disabled={disable} className={"btn btn-success"} onClick={() => {
                            props.rentABook(props.book.id);
                            setDisabled(true);
                        }
                        }>Get this book
                        </button>
                        <div className={"btn-group"}>
                            <Link to={`/books/edit/${props.book.id}`}
                                  title={"Edit"}
                                  className={"btn btn-outline-primary btn-sm"}
                                  onClick={() =>
                                      props.onGetABook(props.book.id)
                                  }>Edit</Link>
                            <button className={"btn btn-outline-danger btn-sm"}
                                    title={"Delete"}
                                    onClick={() =>
                                        props.onDeleteBook(props.book.id)
                                    }
                            >Remove
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Book;