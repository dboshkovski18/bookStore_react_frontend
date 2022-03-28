import React from "react"
import { Link } from "react-router-dom"

const header = () =>{
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to={"/books"}>BookStore.mk</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                        <Link to={"/books"} className="nav-link" >Books</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className={"nav-link"} to={"/categories"}>Categories</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/authors"}>Authors</Link>
                    </li>
                    <li className="nav-item dropdown">
                      <Link className={"nav-link"} to={"/countries"}>Countries</Link>
                    </li>

                </ul>
            </div>
        </nav>
    )
}

export default header;