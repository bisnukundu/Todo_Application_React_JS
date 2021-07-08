import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Form from './components/form';
import Table from './components/table';
import Swal from '../node_modules/sweetalert2'
class App extends React.Component {

  state = {
    nam: "",
    address: "",
    idd: "",
    show_update:false,
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

    Swal.fire({
      title: 'success',
      text: 'Created Successfully',
      icon: 'success'
    })
  }

  deleteItem = id => {
    let d = this.state.contacts.filter((data, i) => { return i !== id });
    this.setState({
      contacts: d
    })

  }

  editItem = (id) => {
    let ed = this.state.contacts.filter((data, i) => { return id === i });
    this.setState({
      nam: ed[0].name,
      address: ed[0].address,
      idd: id,
      show_update:true
    });
  }

  updateItem = () => {
    console.log(this.state.idd);
    if (this.state.idd !== "") {
      this.state.contacts[this.state.idd].name = this.state.nam;
      this.state.contacts[this.state.idd].address = this.state.address;

      this.setState({
        contacts: this.state.contacts,
        nam: '',
        address: '',
        idd: '',
        show_update:false
      });

      Swal.fire({
        title: 'success',
        text: 'Updated Successfully',
        icon: 'success',
      })
    }else{
      console.log("Press Edit Button First")
      Swal.fire({
        title: 'Error!',
        text: 'First You Need to Press Edit Button',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    }

  }

  render() {
    return (
      <div className="container border mx-auto shadow-lg p-5 rounded">
        <div className="row">
          <div className="col-6">
            <Form show_update={this.state.show_update} update={this.updateItem} sv={this.save} addC={this.addC} nam={this.state.nam} address={this.state.address} change={this.nameC} />
          </div>
          <div className="col-6">
            <Table edit={this.editItem} del={this.deleteItem} data={this.state.contacts} />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
