import React, {Component} from 'react'
import logo from '../../images/rezaid-logo.png';
import logo2 from '../../images/rezaid-logo-2.png';
import avatar from '../../images/admin.jpg';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import axios from 'axios';
import AddRecord from '../AddRecord/AddRecord';
import Reports from '../Reports/Reports';

class Dashboard extends Component{
    constructor(props){
        super(props)
        this.state={
        DDNotificationShow : 'dropdown for-notification',
        DDMenu : 'dropdown-menu',
        btnNotification : 'false',
        DDMenuSetting : 'dropdown-menu',
        btnSetting : 'false',
        notificationCount : "",
        showModel : false,
        ProjectName : null,
        ProjectDescription : "",
        ProjectId : null,
        MainTask : null,
        lstTaskOwnerNames : null,
        lstResourceMapping : null,
        MapUserList : [],
        isRefreshGrid : false
   
    }
        this.ShowNotification = this.ShowNotification.bind(this);
        this.ShowSetting = this.ShowSetting.bind(this);
        this.HideNotification = this.HideNotification.bind(this);
        this.ShowModel = this.ShowModel.bind(this);
        this.HideModel = this.HideModel.bind(this);
       // this.ReportProjectDDPopUpChange = this.ReportProjectDDPopUpChange.bind(this);
    }

    componentDidMount(){
        if(localStorage.getItem("UserID") == null && localStorage.getItem("UserID") == undefined){
            window.location.href = "http://localhost:3000";
        }
        const NotifyObj = {
            UserId: localStorage.getItem("UserID")
        }

        axios({
            method: 'post',
            url: 'http://localhost:1316/api/Notification/NotificationCount',
            headers: {}, 
            data: NotifyObj
          })
            .then(response => {
                console.log(response);
                console.log(response.data);
                if(response.data.StatusCode == "200"){
                  console.log(res);
                  var res = response.data.Result;
                  this.setState({ notificationCount : res});
                }
               /*  else{
                    
                    alert("No Notification");
                } */
            
            })
            this.LoadResourceMapping();
            this.LoadProjectName();
            this.LoadMainTasks();
            this.LoadTasksOwnerName();
            
        }

        LoadResourceMapping = () => {
            try{
               
                axios({
                method: 'post',
                url: 'http://localhost:1316/api/ResourceMapping/GetResourceMappingList',
                headers: {}, 
                data: ""
                })
                .then(res => {
                    
                    this.setState({lstResourceMapping: res.data.Result });
                    var tempArray = [];
                    this.state.lstResourceMapping.map(item=>{

                        var userMappings = item.UserId;
                        if (userMappings !== "") {
                            var splitArr = userMappings.split(",");
                            for (var i = 0; i < splitArr.length; i++) {
                                if (localStorage.getItem("UserID") == splitArr[i]) {
                                    tempArray.push(item.ProjectNames);
                                    
                                    /* this.setState({MapUserList.push(item.ProjectName)}); */
                                    break;
                                }
                            }
                        }
                    })
                    this.setState({ MapUserList: tempArray })
                   /*  this.setState({lstResourceMapping: res.data.Result }); */
                    
                });
            }
            catch(e){ alert(e); }   
        }

        LoadProjectName = () => {
            try{
               
                axios({
                method: 'post',
                url: 'http://localhost:1316/api/Projects/GetProjectsList',
                headers: {}, 
                data: ""
                })
                .then(res => {
                    this.setState({ProjectName: res.data.Result });
                    
                });
            }
            catch(e){ alert(e); }   
        }
        
        LoadMainTasks = () => {
            try{
                
                axios({
                method: 'post',
                url: 'http://localhost:1316/api/MainTask/GetMainTasks'
                })
                .then(res => {
                    this.setState({MainTask : res.data.Result });
                    /* this.setState({MainTask : res.data.Result }); */
                });
            }
            catch(e){ alert(e); }   
        }
       /*  LoadPhaseDescription = () => {
            try{

                const Obj = {
                    UserId: localStorage.getItem("UserID")
                }
                axios({
                method: 'post',
                url: 'http://localhost:1316/api/Tasks/GetTasks',
                headers: {}, 
                data: ""
                })
                .then(res => {
                    this.setState({PhaseDescription : res.data.Result });
                    
                });
            }
            catch(e){ alert(e); }   
        } */


        LoadTasksOwnerName = () => {
            try{
                const TaskOwnersObj = {
                    TaskOwnerNames: ''
                };
                axios({
                method: 'post',
                url: 'http://localhost:1316/api/TaskOwners/GetTaskOwners',
                headers: {}, 
                data: TaskOwnersObj
                })
                .then(res => {
                    this.setState({lstTaskOwnerNames : res.data.Result });
                });
            }
            catch(e){ alert(e); }   
        }


    ShowNotification=()=>{
        
        this.setState({
            DDNotificationShow : 'dropdown for-notification show',
            DDMenu : 'dropdown-menu show',
            btnNotification : 'true'
            
        });
    }
    ShowSetting=()=>{
        
        this.setState({
            DDSettingShow : 'dropdown for-notification show',
            DDMenuSetting : 'dropdown-menu show',
            btnSetting : 'true'
            
        });
    }

    


    HideNotification=()=>{
        
       if(this.state.btnNotification === "true" || this.state.btnSetting === "true" ){
            this.setState({
                DDNotificationShow : 'dropdown for-notification',
                DDMenu : 'dropdown-menu',
                btnNotification : 'false',
                DDMenuSetting : 'dropdown-menu',
                btnSetting : 'false'
            });
       }
    }
    ShowModel=()=>{
        this.setState({
            showModel : true
        });
        
    }
    HideModel=()=>{
        this.setState({
            showModel : false
        });
        
    }
    logout=()=>{
       
        try{
            
            localStorage.clear();
            window.location.href = "http://localhost:3000";
        }
        catch(ee){
            alert(ee);
        }
    }

    onToggle =()=>{
        var node = ReactDOM.findDOMNode(this);
        node.classList.toggle('open');
       }
    render(){

        return(
        <BrowserRouter>
             
              <div className="display-table" onClick = {this.HideNotification}>
            
            <aside id="left-panel" className="left-panel" style={{backgroundColor :"#1b1b1b" }}>
                 <nav className="navbar navbar-expand-sm navbar-default" style={{backgroundColor :"#1b1b1b"}} >
                <div className="navbar-header">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-menu" aria-controls="main-menu" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa fa-bars"></i>
                    </button>
                    <a className="navbar-brand">
                        <Link to = "/Reports"> <img src={logo} alt="Logo" /></Link>
                    </a>
                    <a className="navbar-link"><Link to="/Reports"> REZAID </Link></a>
                    <a className="navbar-brand hidden">
                    <Link to ="/Reports"><img src={logo2} alt="Logo" /></Link>
                    </a>
                </div>

                <div id="main-menu" className="main-menu collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                      {/*   <li className="active">
                            <a href="index.html"> <i className="menu-icon fa fa-dashboard"></i>Dashboard</a>
                        </li> */}
                        <li>
                           <Link to="/Reports"> <i className="menu-icon fa fa-file-text"></i> Reports</Link>
                            {/* <a href="reports.html"> <i className="menu-icon fa fa-file-text"></i>Reports</a> */}
                        </li>
                        {/* <li>
                            <Link to="/Projects" onClick=""> <i className="menu-icon fa fa-folder"></i> Projects</Link>
                            <a href="projects.html"> <i className="menu-icon fa fa-folder"></i>Projects</a>
                        </li> */}
                       {/*  <li>
                            <a href="timelog.html"> <i className="menu-icon fa  fa-clock-o"></i>Timelog</a>
                        </li>
                        <li>
                            <a href="users.html"> <i className="menu-icon fa fa-users"></i>Users</a>
                        </li>
                        <li>
                            <a href="project-schedule.html"> <i className="menu-icon fa  fa-calendar"></i>Project Schedule</a>
                        </li>*/}
                        <li>
                           <Link onClick={this.ShowModel}> <i className="menu-icon fa fa-plus"></i> Add Record</Link>
                      
                        </li> 
                    </ul>
                </div>
            </nav>
            </aside>
            
            {/* <div id="CommentedDiv"></div> */}
            <div id="right-panel" className="right-panel">
                 <header id="header" className="header">
                    <div className="header-menu">
                        <div className="col-sm-2">
                        <button id="menuToggle" className="menutoggle pull-left" onClick = {this.onToggle}><i className="ti-angle-left"></i></button>
                        </div>
                        <div className="col-sm-8">
                            <div className="header-actions">
                                {/* <button className="search-trigger" id="searchTrigger"><i className="fa fa-search"></i></button> */}
                                <div className="form-inline searh-container">
                                    <form className="search-form">
                                        <input className="form-control mr-sm-2" type="text" placeholder="Search ..." aria-label="Search" />
                                        <button className="search-close" type="submit"><i className="fa fa-close"></i></button>
                                    </form>
                                </div>
                                <div className={this.state.DDNotificationShow}>
                                    <button onClick={this.ShowNotification} className="btn btn-secondary dropdown-toggle position-relative" type="button" id="notification" data-toggle="dropdown" aria-haspopup="true" aria-expanded={this.state.btnNotification}>
                                        <i className="fa fa-bell"></i>
                                        <span className="count bg-danger">{this.state.notificationCount}</span>
                                    </button>
                                    <div className={this.state.DDMenu} aria-labelledby="notification">
                                        <a className="dropdown-item media">
                                            <Link to="/notification">
                                                <p>You have received {this.state.notificationCount} notification click to view</p>
                                            </Link>
                                        </a>
                                    </div>
                                    
                                   
                                   
                                    <div className="dropdown for-message">
                                        <button onClick={this.ShowSetting} className="btn btn-secondary dropdown-toggle" type="button"
                                                id="message"
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded={this.state.btnSetting}>
                                            <i className="ti-settings"></i>
                                        </button>
                                        <div className={this.state.DDMenuSetting} aria-labelledby="message">
                                          {/*   <a className="dropdown-item media" href="setting.html">
                                                <p>EMS Setting</p>
                                            </a>*/}
                                            <a className="dropdown-item media">
                                            <Link to="/UserProfile">
                                                <p>User Profile</p>
                                            </Link>   
                                            </a> 
                                            <a className="dropdown-item media">
                                            <Link to="/ChangePassword">
                                                <p>Change Password</p>
                                            </Link>    
                                            </a>
                                           
                                           <a className="dropdown-item media" onClick={this.logout}>
                                               <Link> <p>Logout</p> </Link>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="user-area float-right style " style={{position:'fixed'}}>
                                <a >
                                   <Link to="/UserProfile">                                    
                                    <img className="user-avatar rounded-circle" src={avatar} alt="User Avatar" />
                                    <span className="user-name">{localStorage.getItem("UserName")}</span>
                                    </Link>
                                </a>
                               {/*  <div className="user-menu dropdown-menu">
                                        <a className="nav-link" href="user-profile.html"><i className="fa fa- user"></i>My Profile</a>

                                        <a className="nav-link" href="notifications.html"><i className="fa fa- user"></i>Notifications <span className="count">13</span></a>

                                        <a className="nav-link" href="setting.html"><i className="fa fa -cog"></i>Settings</a>

                                        <a className="nav-link" href="page-login.html"><i className="fa fa-power -off"></i>Logout</a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </header>
                {this.props.children}
            </div>

            <AddRecord 
            show = {this.state.showModel}
            hide = {this.HideModel} 
            Name = {this.state.ProjectName}  
            ProjectDDChange = {this.ReportProjectDDPopUpChange}
            DescriptionText = {this.state.ProjectDescription} // need to remove from there
            ProjectID = {this.state.ProjectId} // need to remove from there 
            Maintasks = {this.state.MainTask}
            TaskOwnerNameRecord = {this.state.lstTaskOwnerNames}
            ProjectNameMapped = {this.state.MapUserList}
            
            />

            {/* <Reports isRefresh = {this.state.isRefreshGrid} /> */}

            
        </div>


        </BrowserRouter>
        
            
        
        
        
        );

    }

}

export default Dashboard