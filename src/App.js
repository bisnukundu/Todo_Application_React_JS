import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Form from './components/form';
import Table from './components/table';

class App extends React.Component {
  state = {
    nam:"",
    address:"Dhaka",
    contacts:[
      { name: "bisnu", address: "Dinajpur" },
      { name: "Sopon", address: "Dhaka" },
      { name: "Manum", address: "Rangpur" }
    ]
  }
  nameC(e){
 
  }
  render() {
    return (
      <div className="container border mx-auto shadow-lg p-5 rounded">
        <div className="row">
          <div className="col-6">
            <Form nam={this.state.nam} address={this.state.address} change={this.nameC} />
          </div>
          <div className="col-6">
            <Table data={this.state.contacts} />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
