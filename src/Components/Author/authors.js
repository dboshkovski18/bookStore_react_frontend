import React from "react";

const authors = (props) => {
    return (
        <div className={"row text-center"}>
            <h1>Book authors we offer!</h1>
            <hr/>
            <div className={"col-md-12"}>
                <table className={"table"}>
                    <thead>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Country</th>
                    </thead>
                    <tbody>
                    {
                        props.authors.map((author) => {
                            return (
                                <tr>
                                    <td>{author.name}</td>
                                    <td>{author.surname}</td>
                                    <td>{author.country.name}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default authors;