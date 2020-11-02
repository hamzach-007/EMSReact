import React , {Component} from 'react';
import logo from '../../images/rezaid-logo.png';

class ForgetPassword extends Component{
    
    constructor(props){
        super(props);
        this.state = {
        email : '',
        
         };
         
         this.handleLogin = this.handleLogin.bind(this);
         this.LoginUser = this.ForgetPass.bind(this);

    }


    ForgetPass(e){
        try{
           
            const userObj = {
                email: this.state.email,
            };

           /*  axios({
                method: 'post',
                url: 'http://localhost:1316/api/Login/LoginAPI',
                headers: {}, 
                data: userObj
              })
                .then(response => {
                    console.log(response);
                    console.log(response.data);
                    if(response.data.isSuccess){
                        this.props.history.push('/Home');
                    }
                    else{
                        
                        alert(response.data.ResponseMsg);
                    }
                
                }) */
                
        }
        catch(ex){
            alert(ex);
        }
    }



    handleLogin(e){
        var target = e.target;
        var value = target.value;
        var name = target.name;
        this.setState( {
            [name] : value
        })
    }

    render(){
       
        return(
            <div className="bg-theme-black" style={{height : "100vh"}}>
                 <div className="sufee-login d-flex align-content-center flex-wrap">
                     <div className="container">
                          <div className="login-content">
                            <div className="login-logo">
                                <a href="index.html">
                                   <img src={logo} alt="Logo" />
                                </a>
                            </div>
                            <h2 className="text-center" style={{color:"white"}} >Forgot Password</h2>
                            <div className="login-form">
                                <form>
                                    <div className="form-group">
                                        <input type="email" style={{backgroundColor : "black", color:"white"}} onChange={this.handleLogin}  name="email" value={this.state.email} className="form-control" placeholder="Your Email Address"/>
                                    </div>
                                    <button type="submit" className="btn btn-theme m-b-30 m-t-30">Submit</button>
                                </form>
                               
                            </div>
                            <div className="copyright text-center" style={{color:"white"}}>
                                    &copy; 2020 Rezaid All rights reserved.
                                </div>
                          </div>
                     </div>
                 </div>
            </div>
        );

    }


}

export default ForgetPassword