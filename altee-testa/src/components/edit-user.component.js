import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditUser extends Component {

  constructor(props) {
    super(props)

    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeUserDate = this.onChangeUserDate.bind(this);
    this.onChangeUserRollno = this.onChangeUserRollno.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      name: '',
      date: '',
      rollno: ''
    }
  }

  UNSAFE_componentDidMount() {
    axios.get('http://localhost:4000/users/edit-date/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          name: res.data.name,
          date: res.data.date,
          rollno: res.data.rollno
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeUserName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeUserDate(e) {
    this.setState({ email: e.target.value })
  }

  onChangeUserRollno(e) {
    this.setState({ rollno: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const userObject = {
      name: this.state.name,
      date: this.state.date,
      rollno: this.state.rollno
    };

    axios.put('http://localhost:4000/users/update-user/' + this.props.match.params.id, userObject)
      .then((res) => {
        console.log(res.data)
        console.log('user modifier')
      }).catch((error) => {
        console.log(error)
      })

    
    this.props.history.push('/user-list')
  }


  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>NOM</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeUserName} />
        </Form.Group>

        <Form.Group controlId="Date">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" value={this.state.date} onChange={this.onChangeUserDate} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Genre</Form.Label>
          <Form.Control type="text" value={this.state.rollno} onChange={this.onChangeUserRollno} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          MODIFIER
        </Button>
      </Form>
    </div>);
  }
}