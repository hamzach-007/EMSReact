import React, { Component } from 'react'

class ProjectCard extends Component{
    
     render(){
         
        return(
                
            <div className="grid-layout">
                              <div className="row">
                                <div className="col-sm-6">
                                  <div className="card">
                                    <div className="card-body">
                                      <div className="row">
                                        <div className="col-sm-3">
                                          <div className="profile-placeholder">
                                            <div className="circle">
                                              <img className="profile-pic" src="images/profile-avator.png" alt="" />
                                            </div>
                                            <div className="add-avator">
                                              <i className="fa fa-plus upload-button" />
                                              <input className="file-upload" type="file" accept="image/*" />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-md-6"><h3 className="mt-3">Syria Relief</h3></div>
                                        <div className="col-sm-3 text-right">
                                          <div className="dropdown for-message">
                                            <span id="porjectsAction" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                              <i className="ti-more-alt ico-icon cursor-pointer" />
                                            </span>
                                            <div className="dropdown-menu mt-4" aria-labelledby="porjectsAction">
                                              <a className="dropdown-item media" href="project-details.html">
                                                <p>Details</p>
                                              </a>
                                              <a className="dropdown-item media" href="#">
                                                <p>Edit</p>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <table className="table border-0">
                                        <thead>
                                          <tr>
                                            <th>Completed Days</th>
                                            <th>Budgeted Days</th>
                                            <th>Status</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td>100</td>
                                            <td>150</td>
                                            <td>Active</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <hr className="hr" />
                                      <div className="progress">
                                        <div className="progress-bar bg-success" role="progressbar" style={{width: '100%'}} aria-valuenow="100%" aria-valuemin={0} aria-valuemax={100}>100%</div>
                                      </div> 
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-6">
                                  <div className="card">
                                    <div className="card-body">
                                      <div className="row">
                                        <div className="col-sm-3">
                                          <div className="profile-placeholder">
                                            <div className="circle">
                                              <img className="profile-pic" src="images/profile-avator.png" alt="" />
                                            </div>
                                            <div className="add-avator">
                                              <i className="fa fa-plus upload-button" />
                                              <input className="file-upload" type="file" accept="image/*" />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-md-6"><h3 className="mt-3">ForgottenLands</h3></div>
                                        <div className="col-sm-3 text-right">
                                          <div className="dropdown for-message">
                                            <span id="porjectsAction" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                              <i className="ti-more-alt ico-icon cursor-pointer" />
                                            </span>
                                            <div className="dropdown-menu mt-4" aria-labelledby="porjectsAction">
                                              <a className="dropdown-item media" href="project-details.html">
                                                <p>Details</p>
                                              </a>
                                              <a className="dropdown-item media" href="#">
                                                <p>Edit</p>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <table className="table border-0">
                                        <thead>
                                          <tr>
                                            <th>Completed Days</th>
                                            <th>Budgeted Days</th>
                                            <th>Status</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td>100</td>
                                            <td>150</td>
                                            <td>Active</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <hr className="hr" />
                                      <div className="progress">
                                        <div className="progress-bar bg-danger" role="progressbar" style={{width: '50%'}} aria-valuenow="50%" aria-valuemin={0} aria-valuemax={50}>50%</div>
                                      </div> 
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-6">
                                  <div className="card">
                                    <div className="card-body">
                                      <div className="row">
                                        <div className="col-sm-3">
                                          <div className="profile-placeholder">
                                            <div className="circle">
                                              <img className="profile-pic" src="images/profile-avator.png" alt="" />
                                            </div>
                                            <div className="add-avator">
                                              <i className="fa fa-plus upload-button" />
                                              <input className="file-upload" type="file" accept="image/*" />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-md-6"><h3 className="mt-3">HolyLands Dates</h3></div>
                                        <div className="col-sm-3 text-right">
                                          <div className="dropdown for-message">
                                            <span id="porjectsAction" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                              <i className="ti-more-alt ico-icon cursor-pointer" />
                                            </span>
                                            <div className="dropdown-menu mt-4" aria-labelledby="porjectsAction">
                                              <a className="dropdown-item media" href="project-details.html">
                                                <p>Details</p>
                                              </a>
                                              <a className="dropdown-item media" href="#">
                                                <p>Edit</p>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <table className="table border-0">
                                        <thead>
                                          <tr>
                                            <th>Completed Days</th>
                                            <th>Budgeted Days</th>
                                            <th>Status</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td>100</td>
                                            <td>150</td>
                                            <td>Completed</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <hr className="hr" />
                                      <div className="progress">
                                        <div className="progress-bar bg-info" role="progressbar" style={{width: '75%'}} aria-valuenow="75%" aria-valuemin={0} aria-valuemax={75}>75%</div>
                                      </div> 
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>




        );


     }

}

export default ProjectCard;