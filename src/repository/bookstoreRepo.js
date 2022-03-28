import axios from "../custom-axios/custom_axios";

const bookStoreService = {

    fetchAllBooks: () => {
        return axios.get("/books")
    },
    fetchBook: (id) => {
        return axios.get(`/books/${id}`);
    },
    fetchAllCategories: () => {
        return axios.get("/categories");
    },
    deleteBook: (id) => {
        return axios.delete(`/books/delete/${id}`);
    },
    fetchAllAuthors: () => {
        return axios.get("/authors")
    },
    fetchAllCountries: () => {
        return axios.get("/countries")
    },
    addBook: (name, author, category, availableCopies) => {
        return axios.post("/books/add", {
            name: name,
            category: category,
            author: author,
            availableCopies: availableCopies
        })
    },
    rentABook: (id) => {
        return axios.get(`/books/rent/${id}`);
    },
    editBook: (id, name, category, author, availableCopies) => {
        return axios.put(`/books/edit/${id}`,{
            name: name,
            category: category,
            author: author,
            availableCopies: availableCopies
        })
    }
}

export default bookStoreService;