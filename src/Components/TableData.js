import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';

class TableData extends Component { 
  onDelete(item) {
      this.props.deletePerson(item);
      
  }
  onEdit(item) {
      this.props.editPerson(item);
  }
  render() {
      
    const row = this.props.data.map((item) =>
    <tr key={item.id}>
      <td key={item.name}>{item.name}</td>
      <td key={item.address}>{item.address}</td>
      <td key={item.email}>{item.email}</td>
      <td key={item.food}>{item.food}</td>
      <td><Button onClick={this.onEdit.bind(this, item)} bsStyle="info">Update</Button></td>
      <td><Button onClick={this.onDelete.bind(this, item)} bsStyle="danger">Delete</Button></td>
    </tr>
    
    );  
    return (
    <Table responsive>
    <thead>
      <tr>
      
        <th>Name</th>
        <th>Address</th>
        <th>Email</th>
        <th>Food Choice</th>

      </tr>
      
    </thead>
    <tbody>
    {row}
    </tbody>
  </Table>
    );
  }
}

export default TableData;


