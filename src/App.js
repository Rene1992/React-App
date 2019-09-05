import React, { Component } from 'react';
import './App.css';
import { Grid, Col, Row } from 'react-bootstrap';
import Hello from './Components/Hello';
import Header from './Components/Header';
import FoodForm from './Components/FoodForm';
import TableData from './Components/TableData';

class App extends Component {
  constructor() {
    super();
    this.state = {
            text: '',
            isEdit: 0,
             data: [
             {    
                 id: 1,
                 name: 'Elvis',
                 address: 'Presleystreet 99',
                 email: 'notdead@mail.com',
                 food: 'Hamburger'
             },
             {
                 id: 2,
                 name: 'Mikey',
                 address: 'Mousestreet 6',
                 email: 'mikey@mail.com',
                 food: 'Salad'
             },
             {
                 id: 3,
                 name: 'Donald',
                 address: 'Duckalley 5',
                 email: 'don@mail.com',
                 food: 'Pizza'
             }
             ]
         };
  }
  handleAddPerson(data) {
    const newPerson = {
        id: this.state.data.length + 1,
        name: data[0],
        address: data[1],
        email: data[2],
        food: data[3]
    }
    
    this.setState({data: this.state.data.concat(newPerson)});
  }
  handleOnDelete(item) {
      const persons = this.state.data;
      for(var i=0;i < persons.length; i++) {
          if(persons[i].id == item.id) {
              console.log(persons[i].id);
              persons.splice(i, 1);
         for(var i=0;i < persons.length; i++) {
             persons[i].id--;
         }     
          }
      }
      
      this.setState({data: persons});
  }
  handleOnEdit(item) {
      this.setState({
          isEdit: item.id,
          name: item.name,
          address: item.address,
          email: item.email,
          food: item.food
          });
  }
  handleChangeName(item) {
      this.setState({
          name: item[0],
          address: item[1],
          email: item[2],
          food: item[3]
      });
        
  }
  handleUpdatePerson(item) {
      const persons = this.state.data;
      for(var i=0;i < persons.length; i++) {
          if(persons[i].id == item.id) {
              console.log(persons[i].id);
              persons.splice(i, 1);
      }
      }
        
      persons.push(item);
      this.setState({
          isEdit: 0,
          data: persons
      });
  }
  render() {
    return (
      <div> 
      <Header />
      <Hello />
      <Grid>
        <Row className="show-grid">
            <Col xs={6}>        
                <FoodForm {...this.state}
                onPersonUpdate={this.handleUpdatePerson.bind(this)}
                changeName={this.handleChangeName.bind(this)}
                onAddPerson={this.handleAddPerson.bind(this)} />
              </Col>
  	</Row>
    </Grid>
      <Grid>
        <Row className="show-grid">
            <Col xs={12}>        
                <TableData {...this.state} 
                editPerson={this.handleOnEdit.bind(this)} 
                deletePerson={this.handleOnDelete.bind(this)} />
              </Col>
  	</Row>
    </Grid>
      
      
      </div>
    );
  }
}

export default App;
