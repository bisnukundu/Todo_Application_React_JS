import React from "react"

class Table extends React.Component {
    render() {
        return (
            <>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.data?.map((d, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{index}</th>
                                    <td>{d.name}</td>
                                    <td>{d.address}</td>
                                    <td className="btn-group">
                                        <button onClick={()=>{this.props.edit(index)}} className="btn btn-warning btn-sm">Edit</button>
                                        <button onClick={()=>{this.props.del(index)}} className="btn btn-danger btn-sm">Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </table>
            </>
        )
    }
}
export default Table;