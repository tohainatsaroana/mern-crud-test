import React, {Component} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
// import UserList from './user-list.component';
import Avatar from '@material-ui/core/Avatar';
import BasicModal from './BasicModal';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';


const theme = createTheme();
export default class CreateUser extends Component {

  constructor(props) {
    super(props)

    
    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeUserDate = this.onChangeUserDate.bind(this);
    this.onChangeUserRollno = this.onChangeUserRollno.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  
    this.state = {
      name: '',
      date: '',
      rollno: ''
    }
  }

  onChangeUserName(e) {
    this.setState({name: e.target.value})
  }

  onChangeUserDate(e) {
    this.setState({date: e.target.value})
  }

  onChangeUserRollno(e) {
    this.setState({rollno: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault()

    console.log(`User crée`);
    console.log(`Nom: ${this.state.name}`);
    console.log(`Date: ${this.state.date}`);
    console.log(`Genre: ${this.state.rollno}`);



    const userObject = {
      name: this.state.name,
      date: this.state.date,
      rollno: this.state.rollno
    };
    axios.post('http://localhost:4000/users/create-user', userObject)
      .then(res => console.log(res.data));

    this.setState({name: '', date: '', rollno: ''})
    //mireload page
    // window.location.reload();
  }

  render() {
    return (


      
    

    <div className="form-wrapper">
      <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">

      <Box sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
      {/* <Avatar src="/broken-image.jpg"  /> */}
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            
          </Avatar>
      
   
      <Form onSubmit={this.onSubmit}>
      <Tooltip title="ENTRER VOTRE NOM" arrow>
        <Form.Group controlId="Name">
          <Form.Label>NOM</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeUserName}/>
          
        </Form.Group>
        </Tooltip>
        <Tooltip title="SELECTIONNER DATE" arrow>
        <Form.Group controlId="Date">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" value={this.state.date} onChange={this.onChangeUserDate}/>
        </Form.Group>
        </Tooltip>
        <Form.Group controlId="Radio">
          <input
              type="radio"
              value="Homme"
              checked={this.state.rollno === "Homme"}
              onChange={this.onChangeUserRollno}
            />
            Homme
        </Form.Group>
        <Form.Group controlId="Radio">
          <input
              type="radio"
              value="Femme"
              checked={this.state.rollno === "Femme"}
              onChange={this.onChangeUserRollno}
            />
            Femme
        </Form.Group>
        <Form.Group controlId="Radio">
          <input
              type="radio"
              value="Autres"
              checked={this.state.rollno === "Autres"}
              onChange={this.onChangeUserRollno}
            />
            Autres
        </Form.Group>

        <Form.Group>
      <FormControlLabel control={<Switch color="primary" />} label="Entreprise" />
    </Form.Group>
        <Tooltip title="VALIDATION USER" arrow>
        <Button variant="primary"  block="block" type="submit">
          VALIDER
        </Button>
        </Tooltip>

        <BasicModal/>

        

        {/* window.location.reload(); */}
        </Form>
        </Box>
        </Container>
      </ThemeProvider>
        {/* <br></br>
        <p></p>
        
      <div className="navigation">
     
      <UserList/>
      </div>
     */}
    
      
      
    </div>);
  }
}