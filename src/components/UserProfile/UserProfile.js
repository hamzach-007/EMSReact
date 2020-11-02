import React, {Component} from "react";
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

class UserProfile extends Component{
  constructor(props){
    super(props);
    this.state = {
      lstUserProfile : null,
      Name : "",
      Email : "",
      Department : "",
      Designation : "",
      EMSRole : "",
      Status : "",
      JoiningDate : "",
      //Creationdatetime : ""
    }
  
   this.onFocus = this.onFocus.bind(this);
   this.onBlur = this.onBlur.bind(this);

  }
  componentDidMount(){
    this.LoadUserProfile();
  }

  onFocus(e){

    e.currentTarget.type = "date";
    e.currentTarget.focus();
  }
  onBlur(e) {
    e.currentTarget.type = "text";
    e.currentTarget.blur();
  }
  
  LoadUserProfile = () => {
    try{
      const UserIdObj = {
        UserID: localStorage.getItem("UserID")
    }
       
        axios({
        method: 'post',
        url: 'http://localhost:1316/api/User/GetUserProfile',
        headers: {}, 
        data: UserIdObj
        })
        .then(res => {
            this.setState({lstUserProfile: res.data.Result });
           // this.setState({ Names: res.data.Result[0].Name});
           var temName;
           var tempEmail;
           var tempDepartment;
           var tempDesignation;
           var tempJoiningDate;
           var tempStatus;
           var tempEMSRole
           
           this.state.lstUserProfile.map( item => {  
           temName = item.Name; 
           tempEmail = item.Email;
           tempDepartment = item.Department;
           tempDesignation = item.Designation;
           tempJoiningDate = item.JoiningDate;
          /*  if(item.Status == true){
           tempStatus = "Active";
           }else{
            tempStatus = "NotActive";
           } */
           tempStatus = item.Status;
           tempEMSRole = item.EMSRole;
          })
          this.setState({Name : temName })  
          this.setState({Email : tempEmail })
          this.setState({Department : tempDepartment })
          this.setState({Designation : tempDesignation })
          this.setState({JoiningDate : tempJoiningDate })
          this.setState({Status : tempStatus })
          this.setState({EMSRole : tempEMSRole })
 
        });
        
    }
    catch(e){ alert(e); }   
}
    
    render(){
        return(
          
        <div>
             <div class="content mt-3">
                <div class="row">
                <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <div class="row align-items-center">
                            <div class="col-sm-6"><h3>User Profile</h3></div>
                            {/* <div class="col-sm-6 text-right">
                               <button type="button" class="btn-black mr-2">Edit User <i class="fa fa-pencil"></i></button>
                            </div> */}
                        </div>
                    </div>
                    <div class="card-body"> 
                    <form className="col-md-12" noValidate autoComplete="off"> 

                      <div style={{ padding : "30px"}}>
                      <TextField style={{marginRight : '40px', marginTop : "15px"}} className="text-center col-md-3"
                          id="filled-read-only-input"
                          value={this.state.Name}
                          InputProps={{
                            readOnly: true,
                          }}
                          variant="filled"
                        />

                          <TextField style={{marginRight : '40px', marginTop : "15px"}} className="text-center col-md-3"
                          id="filled-read-only-input"
                          value={this.state.Email}
                          InputProps={{
                            readOnly: true,
                          }}
                          variant="filled"
                        />

                        <TextField style={{marginRight : '40px', marginTop : "15px"}} className="text-center col-md-3"
                          id="filled-read-only-input"
                          value={this.state.JoiningDate}
                          InputProps={{
                            readOnly: true,
                          }}
                          variant="filled"
                        />
                      
                      <TextField style={{marginRight : '40px', marginTop : "15px"}} className="text-center col-md-3"
                          id="filled-read-only-input"
                          value={this.state.Department}
                          InputProps={{
                            readOnly: true,
                          }}
                          variant="filled"
                        />

                          <TextField style={{marginRight : '40px', marginTop : "15px"}} className="text-center col-md-3"
                          id="filled-read-only-input"
                          value={this.state.Designation}
                          InputProps={{
                            readOnly: true,
                          }}
                          variant="filled"
                        />

                        <TextField style={{marginRight : '40px', marginTop : "15px"}} className="text-center col-md-3"
                          id="filled-read-only-input"
                          value={this.state.EMSRole}
                          InputProps={{
                            readOnly: true,
                          }}
                          variant="filled"
                        />
                        </div>
        
                      <div style ={{ marginRight : '40px', padding : "30px", marginTop : "100px"}} >
                      <FormControlLabel className="text-center col-md-12" control={<Checkbox style={{color :"blue"}} checked={this.state.Status} name="checkedE" />} label="Status" />
                      </div>
                      
                      {/* <div class="col-md-12">
                        <input type="submit" value="Save Changes"/>
                      </div> */}
                    
                    </form>
                                 
                    </div>
              </div>
         </div>    
        </div>
        </div>    
        </div>


        );
    }

}

export default UserProfile