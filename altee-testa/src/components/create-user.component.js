import React, {Component} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import UserList from './user-list.component';
import EditUser from './edit-user.component';

export default class CreateUser extends Component {

  constructor(props) {
    super(props)

    
    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeUserDate = this.onChangeUserDate.bind(this);
    this.onChangeUserRollno = this.onChangeUserRollno.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  
    this.state = {
      name: '',
      date: '',
      rollno: ''
    }
  }

  onChangeUserName(e) {
    this.setState({name: e.target.value})
  }

  onChangeUserDate(e) {
    this.setState({date: e.target.value})
  }

  onChangeUserRollno(e) {
    this.setState({rollno: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault()

    console.log(`User crée`);
    console.log(`Nom: ${this.state.name}`);
    console.log(`Date: ${this.state.date}`);
    console.log(`Genre: ${this.state.rollno}`);



    const userObject = {
      name: this.state.name,
      date: this.state.date,
      rollno: this.state.rollno
    };
    axios.post('http://localhost:4000/users/create-user', userObject)
      .then(res => console.log(res.data));

    this.setState({name: '', date: '', rollno: ''})
  }

  render() {
    return (


      
    

    <div className="form-wrapper">
      <h3>FORMULAIRE</h3>
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>NOM</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeUserName}/>
        </Form.Group>

        <Form.Group controlId="Date">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" value={this.state.date} onChange={this.onChangeUserDate}/>
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Homme</Form.Label>
          <input type="radio" value={this.state.rollno} onChange={this.onChangeUserRollno}/>

          <Form.Label>Femme</Form.Label>
          <input type="radio" value={this.state.rollno} onChange={this.onChangeUserRollno}/>

          <Form.Label>Autres</Form.Label>
          <input type="radio" value={this.state.rollno} onChange={this.onChangeUserRollno}/>
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          VALIDER
        </Button>
        </Form>
        <br></br>
        <p>------------------------------------------------------------------------------</p>
        
      <div className="navigation">
      <h3> LISTE USER </h3>
      <UserList/>

      <br></br>
        <p>------------------------------------------------------------------------------</p>

      <h3> EDITER USER </h3>
      <EditUser/>
      </div>
    
    
      

      
    </div>);
  }
}