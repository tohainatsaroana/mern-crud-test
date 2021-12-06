import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentForm from "./StudentForm";


const EditStudent = (props) => {
const [formValues, setFormValues] = useState({
	name: "",
	date: "",
	rollno: "",
});
	

const onSubmit = (studentObject) => {
	axios
	.put(
		"http://localhost:4000/students/update-student/" +
		props.match.params.id,
		studentObject
	)
	.then((res) => {
		if (res.status === 200) {
		alert("User modifié");
		props.history.push("/student-list");
		} else Promise.reject();
	})
	.catch((err) => alert("Erreur"));
};


useEffect(() => {
	axios
	.get(
		"http://localhost:4000/students/update-student/"
		+ props.match.params.id
	)
	.then((res) => {
		const { name,date, rollno } = res.data;
		setFormValues({ name, date, rollno });
	})
	.catch((err) => console.log(err));
}, [props.match.params.id]);


return (
	<StudentForm
	initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize
	>
	MODIFICATION USER
	</StudentForm>
);
};


export default EditStudent;
