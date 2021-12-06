import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const StudentTableRow = (props) => {
const { _id, name, date, rollno } = props.obj;

const deleteStudent = () => {
	axios
	.delete(
"http://localhost:4000/students/delete-student/" + _id)
	.then((res) => {
		if (res.status === 200) {
		alert("USER supprimé");
		window.location.reload();
		} else Promise.reject();
	})
	.catch((err) => alert("Erreur"));
};

return (
	<tr>
	<td>{name}</td>
	<td>{date}</td>
	<td>{rollno}</td>
	<td>
		<Link className="edit-link"
		to={"/edit-student/" + _id}>
		MODIFIER
		</Link>
		<Button onClick={deleteStudent}
		size="sm" variant="danger">
		SUPPRIMER
		</Button>
	</td>
	</tr>
);
};

export default StudentTableRow;
