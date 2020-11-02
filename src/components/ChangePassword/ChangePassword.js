import React, {Component} from "react";
import axios from 'axios';
import PopUpModal from '../PopUpMsgModal/PopUpModal';

class ChangePassword extends Component{

    constructor(props){
        super(props);
        this.state = {
            oldpassword : "",
            newpassword :"",
            confirmPassword : "",
            errorMsg : '',
            Title : "Change Password Error",
            PopUpBit : false,
            success : false
        }
        this.handlePassword = this.handlePassword.bind(this);
        this.ConfrimPassword = this.ConfrimPassword.bind(this);
    }

    
    ConfrimPassword(e){

        if(this.state.oldpassword == "" && this.state.newpassword == "" && this.state.confirmPassword == ""){
            this.setState({errorMsg : 'Fields cannot be Empty' });
            this.setState({PopUpBit : true});
            e.preventDefault();
        }
        else if(this.state.oldpassword == this.state.newpassword ){
            this.setState({errorMsg : 'Old Password cannot be equal to New Password' });
            this.setState({PopUpBit : true});
            e.preventDefault();
        }
        else if(this.state.oldpassword == ""){
            this.setState({errorMsg : 'Old Password cannot be Empty' });
            this.setState({PopUpBit : true});
            e.preventDefault();
        }
        else if(this.state.newpassword == ""){
            this.setState({errorMsg : 'New Password cannot be Empty' });
            this.setState({PopUpBit : true});
            e.preventDefault();
        }
        else if(this.state.confirmPassword == ""){
            this.setState({errorMsg : 'Confirm Password cannot be Empty' });
            this.setState({PopUpBit : true});
            e.preventDefault();
        }
        else if(this.state.newpassword === this.state.confirmPassword){
        try{
           
            //this.props.history.push('/Home');
            //const history = useHistory();
            const passObj = {
                UserId : localStorage.getItem("UserID"),
                oldpassword: this.state.oldpassword,
                newpassword : this.state.newpassword
            }
            
            axios({
                method: 'post',
                url: 'http://localhost:1316/api/ChangePassword/UpdatePassword',
                headers: {}, 
                data: passObj
              })
                .then(response => {
                    
                    console.log(response);
                    console.log(response.data);
                    
                    if(response.data.StatusCode == 200 && this.state.newpassword == this.state.confirmPassword){
                        this.setState({Title : 'Success'})
                        this.setState({errorMsg : 'Password Change Successfully' });
                        this.setState({PopUpBit : true});
                        e.preventDefault();
                        this.setState({success : true});
                        //alert(response.data.Result.ResponseMessage);  
                    }
                    else{
                        this.setState({errorMsg : response.data.Result.ResponseMessage });
                        this.setState({PopUpBit : true});
                        e.preventDefault();
                        //alert(response.data.Result.ResponseMessage);
                    }
                
                })
                
        }
        catch(ex){
            alert(ex);
        }
    }
    else{
        this.setState({errorMsg : 'New Password Does not match Confrim Password' });
        this.setState({PopUpBit : true});
        e.preventDefault();
        //alert("Please Confrim Your Password")
    }
    }

    
    CloseModal = () =>{

        if(this.state.success == true){
            this.setState({PopUpBit : false});
            localStorage.clear();
            window.location.href = "http://localhost:3000";
        }else{
        this.setState({PopUpBit : false});
        }
        }

    handlePassword(e){
        var target = e.target;
        var value = target.value;
        var name = target.name;
        this.setState( {
            [name] : value
        })
    }


    render(){
        return(
          
            <div>
                <div claclassNamess="breadcrumbs">
            <div className="col-sm-12">
                <div className="page-header float-left">
                    <div className="page-title">
                        <h1>Change Password</h1>
                    </div>
                </div>
            </div>
        </div>

        <div className="content mt-3">
        <div className="row">
        <div className="col-sm-12">
                <div className="card">
                    <div className="card-header">
                        <div className="row align-items-center">
                            <div className="col-sm-6"><h3>Change Password</h3></div>
                        </div>
                    </div>
                    <div className="card-body">
                     <div className="row">
                       <div className="col-md-4">
                         <div className="form-group">
                           <input type="Password" onChange = {this.handlePassword} name = "oldpassword" className="form-control" placeholder="Old Password" style={{ border: '1px solid #ccc',boxShadow: ' 1px 1px 3px #888888' }}/>
                         </div>
                          <div className="form-group">
                           <input type="Password"  onChange = {this.handlePassword} name= "newpassword" className="form-control" placeholder="New Password" style={{ border: '1px solid #ccc',boxShadow: ' 1px 1px 3px #888888' }}/>
                         </div>
                          <div className="form-group">
                           <input type="Password" onChange = {this.handlePassword}  name = "confirmPassword" className="form-control" placeholder="Confirm Password" style={{ border: '1px solid #ccc',boxShadow: ' 1px 1px 3px #888888' }}/>
                         </div>
                         <div>
                           <input type="submit" onClick={this.ConfrimPassword} value="Save Changes"/>
                         </div>
                       </div>
                     </div>
                    </div>
                </div>
              </div>
            </div>
           </div>
                    <PopUpModal
                    Title={this.state.Title}
                    errorMsgs = {this.state.errorMsg}
                    show={this.state.PopUpBit} 
                    onHide = {this.CloseModal}
                    />
        </div>

        );
    }

}

export default ChangePassword