import React, {useState} from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, Button, FormLabel } from "react-bootstrap";
import Taille from "./taille.component"
import Avatar from "@material-ui/core/Avatar";

import axios from 'axios';
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
	const [selectShortlistedApplicant, setSelectShortlistedApplicant] = useState(false)
	const onClick = () => setSelectShortlistedApplicant(true)
	const onClickAutres = () => setSelectShortlistedApplicant(false)
	const [profileImg, setProfileImg] = useState({})
	const [previewImg, setPreviewImg] = useState({})
	const handleClickSave =async (values) => {
		let idProfileImg = null
		if(profileImg){
			const formData = new FormData()
			 formData.append('profileImg', profileImg)
			 await axios.post("http://localhost:4000/api/user-profile", formData, {
			 }).then(res => {
					idProfileImg = res?.data?.userCreated?._id  
			 })
		}

		let data = {}
		if (values?._id){
			data ={
				...values,
			}
			
			await axios
			.put(
				"http://localhost:4000/students/update-student/" +
				values._id,
				data
			)
			.then((res) => {
				if (res.status === 200) {
					alert("User modifié");
					props.history.push("/student-list");
				} else Promise.reject();
			})
			.catch((err) => alert("Erreur"));

			debugger
		}else {
			 data = {
				profileImg:idProfileImg,
				...values,
			}
			
			await axios.post('http://localhost:4000/students/create-student',data)
			.then(res => {
				if (res.status === 200)
				alert('User crée')
				else
				Promise.reject()
			})
			.catch(err => alert('Erreur'))
		}
		
	}

const onFileChange = (e) => {
		 setProfileImg(e.target.files[0])
		 setPreviewImg(URL.createObjectURL(e.target.files[0]))
        //lire file
         let files = e.target.files;
         console.log(files);
        // let reader = new FileReader();
        // reader.readAsDataURL(files[0]);
        // console.log(files[0].name)
        // console.log(URL.createObjectURL(e.target.files[0]));
    }
	return (
		<div className="form-wrapper">
			<div className="form-group">
                    <center>
                        
                        <div>
                        <Avatar src={previewImg} alt="img" 
                        style={{ margin: "20px", width: "100px", height: "100px" }} />
                        </div>
                        
                        <input type="file"  onChange={onFileChange} className="form-control" 
                      />
                   
                       
                    </center>
                </div>
			<Formik {...props} validationSchema={validationSchema} onSubmit={handleClickSave}>
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
