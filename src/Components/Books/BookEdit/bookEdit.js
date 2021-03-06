import React from "react";
import {useHistory} from "react-router-dom";

const BookEdit = (props) => {

    const history = useHistory();

    const [formData, updateFormData] = React.useState({
        name: '',
        category: '',
        author: 0,
        availableCopies: 0
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();

        const name = formData.name !== '' ? formData.name : props.book.name;
        const author = formData.author !== 0 ? formData.author : props.book.author.id;
        const category = formData.category !== '' ? formData.category : props.book.category;
        const availableCopies = formData.availableCopies !== 0 ? formData.availableCopies : props.book.availableCopies;

        props.onEditBook(props.book.id, name, category, author, availableCopies);
        history.push("/books");
    }

    return (

        <div className="row mt-5">
            <div className="col-md-6 align-content-center">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Book name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               placeholder={props.book.name}
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="author">Author</label>
                        <select name="author" className="form-control" onChange={handleChange}>
                            {props.authors.map((author) => {
                                    if (props.book.author !== undefined && props.book.author.id === author.id) {
                                        return <option selected={author.id}
                                                       value={author.id}>{author.name + ' ' + author.surname}</option>
                                    } else {
                                        return <option value={author.id}>{author.name + ' ' + author.surname}</option>
                                    }
                                }
                            )}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Category</label>
                        <select name="category" className="form-control" onChange={handleChange}>
                            {props.categories.map((term) => {
                                    if (props.book.category !== undefined && term === props.book.category) {
                                        return <option selected={term} value={term}>{term}</option>
                                    } else {
                                        return <option value={term}>{term}</option>
                                    }
                                }
                            )}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Available copies</label>
                        <input type="number"
                               className="form-control"
                               id="availableCopies"
                               name="availableCopies"
                               placeholder={props.book.availableCopies}
                               onChange={handleChange}
                        /></div>
                    <button id="submit" type="submit" className="btn btn-outline-success mt-1">Submit</button>
                </form>
            </div>
        </div>

    )
}

export default BookEdit;