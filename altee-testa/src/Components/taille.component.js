import React from 'react';
import {   Field, ErrorMessage } from "formik";
import { FormGroup,FormLabel } from "react-bootstrap";

const Taille = (props) => {
    console.log(props);


    return (
		<FormGroup>
		<FormLabel>TAILLE</FormLabel>
			<Field name="taille" type="number"
				className="form-control" />
			<ErrorMessage
			name="taille"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
    );
};

export default Taille;