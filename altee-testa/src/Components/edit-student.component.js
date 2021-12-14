import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentForm from "./StudentForm";


const EditStudent = (props) => {
	const [formValues, setFormValues] = useState({
		_id: null,
		name: "",
		date: "",
		rollno: "",
		taille: "",
	});


	// const onSubmit = (studentObject) => {
	
	// };


	useEffect(() => {
		axios
			.get(
				"http://localhost:4000/students/update-student/"
				+ props.match.params.id
			)
			.then((res) => {
				const {_id,  name, date, rollno, taille } = res.data;
				setFormValues({ _id, name, date, rollno, taille });
			})
			.catch((err) => console.log(err));
	}, [props.match.params.id]);


	return (
		<StudentForm
			initialValues={formValues}
			onSubmit={()=>props.onSubmit(formValues)}
			enableReinitialize
		>
			MODIFICATION USER
		</StudentForm>
	);
};


export default EditStudent;
