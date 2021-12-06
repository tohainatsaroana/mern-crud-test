import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, Button,FormLabel } from "react-bootstrap";

const StudentForm = (props) => {
const validationSchema = Yup.object().shape({
	name: Yup.string().required("Veuillez remplir votre nom!"),
	date: Yup.string()
	.required("Veuillez remplir la date !"),
	rollno: Yup.string()
	.required("Veuillez selectionner votre sexe!"),
});
console.log(props);
return (
	<div className="form-wrapper">
	<Formik {...props} validationSchema={validationSchema}>
		<Form>
		<FormGroup>
		<FormLabel>NOM</FormLabel>
			<Field name="name" type="text"
				className="form-control" />
			<ErrorMessage
			name="name"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormGroup>
		<FormLabel>DATE</FormLabel>
			<Field name="date" type="date"
				className="form-control" />
			<ErrorMessage
			name="date"
			className="d-block invalid-feedback"
			component="span"
			/>
			<Field name="rollno" type="radio" value ="Homme"/> Homme
			<Field name="rollno" type="radio" value ="Femme"/> Femme
			<Field name="rollno" type="radio" value ="Autres"/> Autres
		</FormGroup>
		<FormGroup>
			<ErrorMessage
			name="rollno"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<Button variant="primary" 
			block="block" type="submit">
			{props.children}
		</Button>
		</Form>
	</Formik>
	</div>
);
};

export default StudentForm;
