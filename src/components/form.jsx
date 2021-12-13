import React from "react";
class Form extends React.Component {
    render() {
        return (
            <div>
                <h3 style={{fontFamily:"gabriola"}} className="text-center">Created By Bisnu kundu</h3>
                <small>Thanks gh-pages</small>
                <form onSubmit={this.props.sv}>
                    <div className="form-group mb-2">

                        <label htmlFor="name">Name</label>
                        <input required value={this.props.nam} onChange={this.props.change} type="text" className="form-control" id="name" placeholder="Enter Name" />
                    </div>

                    <div className="form-group mb-2">
                        <label htmlFor="phone">Phone</label>
                        <input required value={this.props.address} onChange={this.props.addC} type="text" className="form-control" id="phone" placeholder="Enter Phone" />
                    </div>

                    {this.props.show_update === false ? <button type="submit" className="btn btn-primary">Add</button> : ''}

                </form>

                {this.props.show_update === false ? '' : <button onClick={this.props.update} className="btn btn-primary">Update</button>}
            </div>
        )
    }
}
export default Form;