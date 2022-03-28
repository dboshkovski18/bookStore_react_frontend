import React from "react";

const countries = (props) => {
    return (
        <div className={"row text-center"}>
            <h1>Worldwide international offer!</h1>
            <hr/>
            <div className={"col-md-12"}>
                <table className={"table"}>
                    <thead>
                    <th>Name</th>
                    <th>Continent</th>
                    </thead>
                    <tbody>
                    {
                        props.countries.map((country) => {
                            return (
                                <tr>
                                    <td>{country.name}</td>
                                    <td>{country.continent}</td>
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

export default countries;