import React, { Component } from 'react';
import axios from 'axios';
import Avatar from "@material-ui/core/Avatar";
// import FileUpload from '@material-ui/icons/AddPhotoAlternate'
export default class FilesUploadComponent extends Component {
    constructor(props) {
        super(props);
        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            profileImg: '',
            previewImg: ''
        }
    }

    onFileChange(e) {
        this.setState({ 
            profileImg: e.target.files[0],
            previewImg: URL.createObjectURL(e.target.files[0])
         })
        //lire file
         let files = e.target.files;
         console.log(files);
        // let reader = new FileReader();
        // reader.readAsDataURL(files[0]);
        // console.log(files[0].name)
        // console.log(URL.createObjectURL(e.target.files[0]));
        
    }

    onSubmit(e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('profileImg', this.state.profileImg)
        axios.post("http://localhost:4000/api/user-profile", formData, {
        }).then(res => {
            console.log(res)
        })
    }

    

 
    render() {
        const {
            previewImg
             
        } = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <center>
                        
                        <div>
                        <Avatar src={previewImg} alt="img" 
                        style={{ margin: "20px", width: "100px", height: "100px" }} />
                        </div>
                        
                        <input type="file"  onChange={this.onFileChange} className="form-control" 
                      />
                   
                   <div className="form-group">
                            <button  type="submit">CHANGER AVATAR {/* <FileUpload/> */}</button>
                        </div>      
                    </center>
                </div>
            </form>
        )
    }
}