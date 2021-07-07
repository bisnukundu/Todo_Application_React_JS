import React from "react";
class Form extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <div className="form-group mb-2">
                        
                        <label htmlFor="name">Name</label>
                        <input onChange={this.props.change} type="email" className="form-control" id="name"  placeholder="Enter Name" />
                    </div>

                    <div className="form-group mb-2">
                        <label htmlFor="phone">Phone</label>
                        <input type="password" className="form-control" id="phone" placeholder="Enter Phone" />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}
export default Form;