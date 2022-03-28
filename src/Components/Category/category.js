import React from 'react';

const category = (props) => {
        return(
            <div className={"row text-center"}>
                <h1>Book categories we have!</h1>
                <hr/>
                <div className={"col-md-12"}>
                    <table className={"table"}>
                        <thead><th>Categories</th></thead>
                        <tbody>
                        {
                            props.categories.map((category) => {
                                return (
                                    <tr>
                                        <td className={"text-center"}>{category}</td>
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

export default category;
