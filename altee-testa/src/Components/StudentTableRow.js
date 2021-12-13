import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { Avatar } from "@material-ui/core";


const StudentTableRow = (props) => {
const { _id, profileImg, name, date, rollno, taille } = props.obj;

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
	<td><Avatar alt="" src={profileImg}  style={{width: "60px", height: "60px" }}/> </td>
	<td>{name}</td>
	<td>{date}</td>
	<td>{rollno}</td>
	<td>{taille}</td>
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
