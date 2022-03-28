import React from "react";
import {useHistory} from "react-router-dom";

const BookAdd = (props) => {

    const history = useHistory();

    const [formData, updateFormData] = React.useState({
        name : '',
        author : 1,
        category : 'NOVEL',
        availableCopies : 0
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name] : e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();

        const name = formData.name;
        const author = formData.author;
        const category = formData.category;
        const availableCopies = formData.availableCopies;

        props.onAddBook(name,author,category,availableCopies);
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
                               required
                               placeholder="Enter book name"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="author">Author</label>
                        <select name="author" className="form-control" onChange={handleChange}>
                            {props.authors.map((author) =>
                                <option value={author.id}>{author.name + ' ' + author.surname}</option>
                            )}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Category</label>
                        <select name="category" className="form-control" onChange={handleChange}>
                            {props.categories.map((term) =>
                                <option value={term}>{term}</option>
                            )}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Available copies</label>
                        <input type="number"
                               className="form-control"
                               id="availableCopies"
                               name="availableCopies"
                               required
                               placeholder="Enter number of copies"
                               onChange={handleChange}
                        />                    </div>
                    <button id="submit" type="submit" className="btn btn-outline-success mt-1">Submit</button>
                </form>
            </div>
        </div>

    )
}

export default BookAdd;