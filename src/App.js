import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Form from './components/form';
import Table from './components/table';

class App extends React.Component {

  state = {
    nam: "",
    address: "",
    contacts: [
      { name: "bisnu", address: "Dinajpur" },
      { name: "Sopon", address: "Dhaka" },
      { name: "Manum", address: "Rangpur" }
    ]
  }


  nameC = e => {
    let na = e.target.value;
    this.setState({ nam: na });
  }

  addC = e => {
    let add = e.target.value;
    this.setState({ address: add });
  }

  save = e => {
    // e.preventdefault()
    e.preventDefault();
    let obj = { name: this.state.nam, address: this.state.address };
    let newData = [...this.state.contacts, obj];
    this.setState({
      contacts: newData,
      nam: '',
      address: ''
    })
  }

  deleteItem = id=>{

    let d = this.state.contacts.filter((data,i) =>{ return i !== id});
    this.setState({
      contacts:d
    })
      console.log(d);
  }

  render() {
    return (
      <div className="container border mx-auto shadow-lg p-5 rounded">
        <div className="row">
          <div className="col-6">
            <Form sv={this.save} addC={this.addC} nam={this.state.nam} address={this.state.address} change={this.nameC} />
          </div>
          <div className="col-6">
            <Table del={this.deleteItem} data={this.state.contacts} />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
