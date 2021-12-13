import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentForm from "./StudentForm";


const EditStudent = (props) => {
	const [formValues, setFormValues] = useState({
		profileImg:"",
		name: "",
		date: "",
		rollno: "",
		taille: "",
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
				const { name, date, rollno, taille } = res.data;
				setFormValues({ name, date, rollno, taille });
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
