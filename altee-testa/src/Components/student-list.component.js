import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import StudentTableRow from "./StudentTableRow";
// import { Avatar } from "@material-ui/core";

const StudentList = () => {
const [students, setStudents] = useState([]);

useEffect(() => {
	axios
	.get("http://localhost:4000/students/")
	.then(({ data }) => {
		setStudents(data);
	})
	.catch((error) => {
		console.log(error);
	});
}, []);


const [api, setApi] = useState([]);



useEffect(() => {
	axios
	.get("http://localhost:4000/api/")
	.then(({ data }) => {
		setApi(data);
	})
	.catch((error) => {
		console.log(error);
	});
}, []);


const DataTable = () => {
	return students.map((res, i) => {
	return <StudentTableRow obj={res} key={i} />;
	});
};


const UserTable = () => {
	return api.map((res, i) => {
	return <StudentTableRow obj={res} key={i}  />;
	});
};




return (

// 	<div>
// <div className="header">
//  <ul className="list-group list-group-flush">
// {api.map((image,i)=>
// (
// <li className="list-group-item" key={i} >
// <Avatar alt="" 
// src={image.profileImg}  style={{ margin: "20px", width: "60px", height: "60px" }}/> 

//  </li>
// ))}
//  </ul>
// </div>



	<div className="table-wrapper">
	<Table striped bordered hover>
		<thead>
		<tr>
			<th>AVATAR</th>
			<th>NOM</th>
			<th>DATE</th>
			<th>GENRE</th>
			<th>TAILLE</th>
			<th>ACTION</th>
		</tr>
		</thead>
		<tbody>{UserTable() && DataTable()}</tbody>
	</Table>
	</div>
	// </div>
);
};

export default StudentList;
