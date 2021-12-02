import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class UserTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteUser = this.deleteUser.bind(this);
    }

    deleteUser() {
        axios.delete('http://localhost:4000/users/delete-user/' + this.props.obj._id)
            .then((res) => {
                window.location.reload();
                console.log('Suprrimer User')
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.date}</td>
                <td>{this.props.obj.rollno}</td>
                <td>
                    <Link className="edit-link" to={"/edit-user/" + this.props.obj._id}>
                        Modifier
                    </Link>
                    <Button onClick={this.deleteUser} size="sm" variant="danger">Supprimer</Button>
                </td>
            </tr>
        );
    }
}