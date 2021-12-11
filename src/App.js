import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Form from './components/form';
import Table from './components/table';
import { useState } from 'react'

function App() {

  return (
    <div className="container border mx-auto shadow-lg p-5 rounded">
      <div className="row">
        <div className="col-6">
          <Form  />
        </div>
        <div className="col-6">
          <Table />
        </div>
      </div>

    </div>
  );
}
export default App