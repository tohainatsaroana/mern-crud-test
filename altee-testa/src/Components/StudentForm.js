import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, Button, FormLabel } from "react-bootstrap";
import Taille from "./taille.component"
import FilesUploadComponent from './files-upload-component';

const StudentForm = (props) => {
	const validationSchema = Yup.object().shape({
		name: Yup.string().required("Veuillez remplir votre nom!"),
		date: Yup.string()
			.required("Veuillez remplir la date !"),
		rollno: Yup.string()
			.required("Veuillez selectionner votre sexe!"),
		taille: Yup.number()
			.positive()
			.min(3, "Votre taille est invalide")
			.required("Veuillez entrer votre taille!"),
	});
	console.log(props);
	const [selectShortlistedApplicant, setSelectShortlistedApplicant] = React.useState(false)
	const onClick = () => setSelectShortlistedApplicant(true)
	const onClickAutres = () => setSelectShortlistedApplicant(false)

	return (
		<div className="form-wrapper">
			<FilesUploadComponent />
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
						<FormGroup>
							<Field name="rollno" type="radio" value="Homme" onClick={onClick} /> Homme
							<Field name="rollno" type="radio" value="Femme" onClick={onClick} /> Femme
							<Field name="rollno" type="radio" value="Autres" onClick={onClickAutres} /> Autres
							{selectShortlistedApplicant ? <Taille /> : null}

						</FormGroup>
					</FormGroup>
					<FormGroup>
						<ErrorMessage
							name="rollno"
							className="d-block invalid-feedback"
							component="span"
						/>
					</FormGroup>
					<br></br>
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
