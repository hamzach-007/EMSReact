import React, {Component,} from 'react';
import logo from '../../images/rezaid-logo.png';
import ForgetPassword from '../ForgetPassword/ForgetPassword';
import PopUpModal from '../PopUpMsgModal/PopUpModal';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";



class Login extends Component{
 
    constructor(props){
        super(props);
        this.state = {
            username : '',
            password : '',
            errorMsg : '',
            Title : "Login Error",
            PopUpBit : false
         };
         
         this.handleLogin = this.handleLogin.bind(this);
         this.LoginUser = this.LoginUser.bind(this);
    }
    

    componentDidMount(){
        localStorage.clear();
    }
    LoginUser(e){

        if(this.state.username === "" && this.state.password === ""){
            this.setState({errorMsg : 'Username and Password cannot be Empty' });
            this.setState({PopUpBit : true});
            e.preventDefault();
        }
        else if(this.state.username == "" ){
            this.setState({errorMsg : 'Username cannot be Empty' });
            this.setState({PopUpBit : true});
            e.preventDefault();
        }
        else if(this.state.password == ""){
            this.setState({errorMsg : 'Password cannot be Empty' });
            this.setState({PopUpBit : true});
            e.preventDefault();
        }
        else{
            try{   
                const userObj = {
                    username: this.state.username,
                    password : this.state.password
                };
                
                axios({
                    method: 'post',
                    url: 'http://localhost:1316/api/Login/LoginAPI',
                    headers: {}, 
                    data: userObj
                  })
                    .then(res => {
                        if(res.data.isSuccess == true){
                            localStorage.setItem('UserName' ,res.data.Result.FullName);
                            localStorage.setItem('UserID' ,res.data.Result.UserId);
                            localStorage.setItem('Role' ,res.data.Result.Role);
                            this.props.history.push('/Reports');
                        }
                        else
                        {
                            this.setState({errorMsg : res.data.ResponseMsg });
                            this.setState({PopUpBit : true});
                            e.preventDefault();
                        }
                    })
                   
            }
            catch(ex){
                    alert(ex);
            }
        }
        e.preventDefault();
    }

    handleLogin(e){
        try{
            var target = e.target;
            var value = target.value;
            var name = target.name;
            this.setState( {
                [name] : value
            })
        }
        catch(ex){
            alert(ex);
        }
    }
    
    CloseModal = () =>{
        this.setState({PopUpBit : false});
    }
  
    render(){
        
        return(
            <div className="bg-theme-black " style={{height : "100vh"}}>
                <div className="sufee-login d-flex align-content-center flex-wrap">
                    <div className="container">
                    <div className="login-content">
                        <div className="login-logo">
                            <a href="index.html">
                            <img src={logo} alt="Logo" />
                            </a>
                        </div>
                        <h2 className="text-center" style={{color:'white'}}>Effort Managment System</h2>
                        <div className="login-form">
                            
                            <form>
                                <div className="form-group">
                                    <input type="text" style={{backgroundColor : "black", color:"white"}} onChange={this.handleLogin} name="username" value={this.state.username} className="form-control" placeholder="User Name"  />
                                </div>
                                <div className="form-group">
                                    <input type="password" style={{backgroundColor : "black", color:"white"}} onChange={this.handleLogin} name="password" value={this.state.password} className="form-control" placeholder="Password" />
                                </div>
                                <div className="form-group mb-o">
                                    <button type="submit" onClick={this.LoginUser} className="btn btn-theme m-b-30 m-t-30">Login</button>
                                </div>
                                {/* <div className="checkbox mt-4 mb-4">
                                   <label>
                                        <input type="checkbox" /> Remember Me
                                    </label> 
                                </div> */}
                                <label className="pull-right">
                                    <Link to="/ForgetPassword">Forgotten Password?</Link>
                                </label>
                            </form>
                              
                        </div>
                        </div>
                        <div className="copyright text-center" style={{color:'white'}}>
                            &copy; 2020 Rezaid All rights reserved.
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

export default Login
