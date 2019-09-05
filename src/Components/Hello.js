import React, { Component } from 'react';
import { Grid, Jumbotron, Col, Row } from 'react-bootstrap';

class Hello extends Component {
  render() {
    return (
    <Grid>
        <Row className="show-grid">
            <Col xs={12}>        
                <Jumbotron>
                <h1>Food order form</h1>
                <p>Please, insert your info in the form below</p>
              </Jumbotron>
              </Col>
  	</Row>
    </Grid>
    );
  }
}

export default Hello;


