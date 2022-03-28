import './App.css';
import React from "react"
import Books from "../Books/BookList/books"
import BookStoreService from "../../repository/bookstoreRepo";
import Header from "../Header/header";
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Category from "../Category/category";
import Author from "../Author/authors";
import Country from "../Countries/countries";
import BookAdd from "../Books/BookAdd/bookAdd";
import BookEdit from "../Books/BookEdit/bookEdit";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            books: [],
            countries: [],
            authors: [],
            categories: [],
            selectedBook: {}
        }
    }

    render() {
        return (
            <Router>
                <main>
                    <Header/>
                    <div className={"container"}>
                        <Switch>
                            <Route path={"/"} exact
                                   render={() => <Books books={this.state.books}
                                                        onDeleteBook={this.deleteBook}
                                                        rentABook={this.rentABook}
                                   />}/>
                            <Route path={"/books/add"} exact
                                   render={() => <BookAdd
                                       authors={this.state.authors}
                                       categories={this.state.categories}
                                       onAddBook={this.addBook}
                                   />}/>
                            <Route path={"/books/edit/:id"} exact
                                   render={() => <BookEdit
                                       authors={this.state.authors}
                                       categories={this.state.categories}
                                       book={this.state.selectedBook}
                                       onEditBook={this.editBook}
                                   />}/>
                            <Route path={"/books"} exact
                                   render={() => <Books books={this.state.books}
                                                        onDeleteBook={this.deleteBook}
                                                        rentABook={this.rentABook}
                                                        onGetABook={this.getABook}
                                   />}/>
                            <Route path={"/categories"} exact
                                   render={() => <Category categories={this.state.categories}/>}/>
                            <Route path={"/authors"} exact
                                   render={() => <Author authors={this.state.authors}/>}/>
                            <Route path={"/countries"} exact
                                   render={() => <Country countries={this.state.countries}/>}/>

                            <Redirect to={"/"}/>
                        </Switch>
                    </div>
                </main>
            </Router>
        )
    }

    componentDidMount() {
        this.loadAllBooks();
        this.loadAllCategories()
        this.loadAllAuthors();
        this.loadAllCountries();
    }

    loadAllBooks = () => {
        BookStoreService.fetchAllBooks()
            .then((data) => {
                this.setState({
                    books: data.data
                })
            })
    }

    loadAllCategories = () => {
        BookStoreService.fetchAllCategories()
            .then((data) => {
                this.setState({
                    categories: data.data
                })
            })
    }

    loadAllAuthors = () => {
        BookStoreService.fetchAllAuthors()
            .then((data) => {
                this.setState({
                    authors: data.data
                })
            })
    }


    loadAllCountries = () => {
        BookStoreService.fetchAllCountries()
            .then((data) => {
                this.setState({
                    countries: data.data
                })
            })
    }

    deleteBook = (id) => {
        BookStoreService.deleteBook(id)
            .then(() => {
                this.loadAllBooks();
            })
    }

    addBook = (name, author, category, availableCopies) => {
        BookStoreService.addBook(name, author, category, availableCopies)
            .then(() => {
                this.loadAllBooks();
            })
    }

    editBook = (id, name, category, author, availableCopies) => {
        BookStoreService.editBook(id, name, category, author, availableCopies)
            .then(() => {
                this.loadAllBooks();
            })
    }

    rentABook = (id) => {
        BookStoreService.rentABook(id)
            .then(() => {
                this.loadAllBooks();
            })
    }

    getABook = (id) => {
        BookStoreService.fetchBook(id)
            .then((data) => {
                this.setState({
                    selectedBook : data.data
                })
            })
    }

}

export default App;

