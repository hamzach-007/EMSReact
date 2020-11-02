import React, {Component} from 'react';
import avatar from '../../images/admin.jpg';

class TopBar extends Component{


    render(){
        
        return(
            <div >
                <header id="header" className="header">
                    <div className="header-menu">
                        <div className="col-sm-2">
                            <a id="menuToggle" className="menutoggle pull-left"><i className="ti-angle-left"></i></a>
                        </div>
                        <div className="col-sm-8">
                            <div className="header-actions">
                                <button className="search-trigger" id="searchTrigger"><i className="fa fa-search"></i></button>
                                <div className="form-inline searh-container">
                                    <form className="search-form">
                                        <input className="form-control mr-sm-2" type="text" placeholder="Search ..." aria-label="Search" />
                                        <button className="search-close" type="submit"><i className="fa fa-close"></i></button>
                                    </form>
                                </div>
                                <div className="dropdown for-notification">
                                    <button className="btn btn-secondary dropdown-toggle position-relative" type="button" id="notification" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fa fa-bell"></i>
                                        <span className="count bg-danger">3</span>
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="notification">
                                        <a className="dropdown-item media" href="notifications.html">
                                            <p>You have received 3 notification click to view</p>
                                        </a>
                                    </div>
                                    <div className="dropdown for-message">
                                        <button className="btn btn-secondary dropdown-toggle" type="button"
                                                id="message"
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="ti-settings"></i>
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="message">
                                            <a className="dropdown-item media" href="setting.html">
                                                <p>EMS Setting</p>
                                            </a>
                                            <a className="dropdown-item media" href="user-profile.html">
                                                <p>User Profile</p>
                                            </a>
                                            <a className="dropdown-item media" href="change-password.html">
                                                <p>Change Password</p>
                                            </a>
                                            <a className="dropdown-item media" href="page-login.html">
                                                <p>Logout</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="user-area dropdown float-right">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img className="user-avatar rounded-circle" src={avatar} alt="User Avatar" />
                                    <span className="user-name">Shahid Ali</span>
                                </a>
                                <div className="user-menu dropdown-menu">
                                        <a className="nav-link" href="user-profile.html"><i className="fa fa- user"></i>My Profile</a>

                                        <a className="nav-link" href="notifications.html"><i className="fa fa- user"></i>Notifications <span className="count">13</span></a>

                                        <a className="nav-link" href="setting.html"><i className="fa fa -cog"></i>Settings</a>

                                        <a className="nav-link" href="page-login.html"><i className="fa fa-power -off"></i>Logout</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );

    }

}

export default TopBar;