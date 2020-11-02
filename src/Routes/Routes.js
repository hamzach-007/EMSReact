import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Login from '../components/Login/Login';
import ForgetPassword from '../components/ForgetPassword/ForgetPassword';
import Dashboard from '../components/Dashboard/Dashboard';
import Home from '../components/Dashboard/Home';
import Users from '../components/Users/Users';
import Reports from '../components/Reports/Reports';
import Projects from '../components/Projects/Projects';
import Notification from "../components/Notificaion/Notification";
import ChangePassword from "../components/ChangePassword/ChangePassword";
import UserProfile from "../components/UserProfile/UserProfile";

function Routes(){
     return(
          
        <BrowserRouter>
        

            <Switch>
            
                <Route exact path="/" component={Login} />
                <Route exact path="/ForgetPassword" component={ForgetPassword} />
                <Home>
                <Route component={({ match }) =>
                    <div>
                        <Route path='/Reports' component={Reports} />
                        <Route path='/Projects' component={Projects} />
                        <Route path='/page3' component={Users} />
                        <Route path='/notification' component={Notification} />
                        <Route path='/ChangePassword' component={ChangePassword} />
                        <Route path='/UserProfile' component={UserProfile} />
                    </div>
                }/>
                </Home>
                {/* <Route exact path="/Projects" component={Projects}></Route> */}
            </Switch>
        </BrowserRouter>

     );
}

export default Routes;