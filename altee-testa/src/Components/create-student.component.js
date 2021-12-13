import React, { useState } from "react";
import axios from 'axios';
import StudentForm from "./StudentForm";

const CreateStudent = () => {
const [formValues] = useState({ profileImg: '', name: '', date: '', rollno: '', taille:'' })

const onSubmit = studentObject => {
	axios.post(
'http://localhost:4000/students/create-student',
	studentObject)
	.then(res => {
		if (res.status === 200)
		alert('User crée')
		else
		Promise.reject()
	})
	.catch(err => alert('Erreur'))
}
	

return(
	<StudentForm initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize>
	CREATION USER
	</StudentForm>
)
}


export default CreateStudent
