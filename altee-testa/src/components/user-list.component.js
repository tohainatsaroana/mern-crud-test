import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import UserTableRow from './UserTableRow';




export default class UserList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:4000/users/')
      .then(res => {
        console.log(res.data)

        this.setState({
          users: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }



  DataTable() {

    return this.state.users.map((res, i) => {
      return <UserTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper">
     
      <Table striped bordered hover>
        <thead>
          <tr>
            {/* <th>Nom: {this.state.name}</th>
            <th>Date: {this.state.date}</th>
            <th>Genre: {this.state.rollno}</th> */}
            <th>Nom</th>
            <th>Date</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
      
    </div>



    );
  }
}