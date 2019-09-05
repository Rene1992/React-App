import React, { Component } from 'react';
import { FormGroup, Form, ControlLabel, FormControl, Button, Col } from 'react-bootstrap';

class FoodForm extends Component {
  onChange() {
      const editPerson = [this.name.value, this.address.value, this.email.value, this.food.value];
      this.props.changeName(editPerson);
      
  }  
  addPerson(e) {
    e.preventDefault();
    const name = this.name.value;
    const address = this.address.value;
    const email = this.email.value;
    const food = this.food.value;
    
    if(!name || !address || !email || !food) {
        alert("Please fill all fields.");
        return;
    }
    
    if(this.props.isEdit) {
        const updatedPerson = {
            id:this.props.isEdit,
            name: name,
            address: address,
            email: email,
            food: food         
        }
        
        this.props.onPersonUpdate(updatedPerson)
    } else {
      const newPerson = [name, address, email, food];
      this.props.onAddPerson(newPerson);  
    }
    
  }
  render() {   
    return (
      <Form onSubmit={this.addPerson.bind(this)}>
      
            <FormGroup controlId="formName">
              <Col componentClass={ControlLabel} sm={2}>
                Name:
              </Col>
              <Col sm={10}>
                <FormControl onChange={this.onChange.bind(this)} 
                value={this.props.name} inputRef={ref => this.name = ref} 
                type="text" placeholder="Name" />
              </Col>
            </FormGroup>
    
            <FormGroup controlId="formAddress">
            <Col componentClass={ControlLabel} sm={2}>
                Address:
            </Col>
            <Col sm={10}>
            <FormControl onChange={this.onChange.bind(this)} 
            value={this.props.address} 
            inputRef={ref => this.address = ref} 
            type="text" placeholder="Address" />
            </Col>
            </FormGroup>

            <FormGroup controlId="formEmail">
            <Col componentClass={ControlLabel} sm={2}>
                Email:
            </Col>
            <Col sm={10}>
            <FormControl onChange={this.onChange.bind(this)} 
            value={this.props.email} 
            inputRef={ref => this.email = ref} 
            type="email" placeholder="Email" />
            </Col>
            </FormGroup>
    
            <FormGroup controlId="formFood">
            <Col componentClass={ControlLabel} sm={2}>
                Food Choice:
            </Col>
            <Col sm={10}>
            <FormControl onChange={this.onChange.bind(this)} 
            value={this.props.food} 
            inputRef={ref => this.food = ref} 
            componentClass="select" placeholder="Food Choice" >
            <option value="Pizza">Pizza</option>
            <option value="Hamburger">Hamburger</option>
            <option value="Salad">Salad</option>
            <option value="Chicken">Chicken</option>
            </FormControl>
            </Col>
            </FormGroup>
    
            <Col componentClass={ControlLabel} sm={2}>
            <Button id="button-submit" bsStyle="primary" type="submit">
             Submit
            </Button>
            </Col>
    
      </Form>
    );
  }
}
  


export default FoodForm;


