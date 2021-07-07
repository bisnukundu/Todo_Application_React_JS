import React from "react";
class Form extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.sv}>
                    <div className="form-group mb-2">
                        
                        <label htmlFor="name">Name</label>
                        <input value={this.props.nam} onChange={this.props.change} type="text" className="form-control" id="name"  placeholder="Enter Name" />
                    </div>

                    <div className="form-group mb-2">
                        <label htmlFor="phone">Phone</label>
                        <input value={this.props.address} onChange={this.props.addC} type="text" className="form-control" id="phone" placeholder="Enter Phone" />
                    </div>

                    <button  type="submit" className="btn btn-primary">Add</button>
                </form>
            </div>
        )
    }
}
export default Form;