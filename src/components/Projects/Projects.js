import React, { Component } from 'react'
import ProjectCard from './ProjectCard';
import ProjectsGrid from './ProjectsGrid';
import axios from 'axios';

class Projects extends Component{

    constructor(props){
       super(props);
       this.state = {
          projectList : null,
          isReload : false,
          isCardView : false
       }
    }


    componentDidMount(){
      
      const ProjectcObj = {
        ProjectName: ''
      };
      axios({
        method: 'post',
        url: 'http://localhost:1316/api/Projects/GetProjects',
        headers: {}, 
        data: ProjectcObj
      })
        .then(res => {
            console.log(res);
            console.log('hamza');
            console.log(res.data);
            console.log(res.data.Result);
            this.setState({projectList : res.data.Result });
        });
    }
    
    render(){
        return(
            <div id="right-panel" class="right-panel">
                <div className="content mt-3">
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="card">
                          <div className="card-header">
                            <div className="row align-items-center">
                              <div className="col-sm-5"><h3>Projects</h3></div>
                              <div className="col-sm-7 text-right">
                                <button type="button" className="btn-black mr-2">All Projects</button>
                                <button type="button" className="btn-black" data-toggle="modal" data-target="#addProject">Add Projects <i className="fa fa-plus" /></button>
                                <i className="ti-view-list ico-icon mr-3 ml-3 listView" />
                                <i className="ti-layout-grid3-alt ico-icon gridView" />
                              </div>
                            </div>
                          </div>
                          <div className="card-body">
                            <ProjectsGrid hamza="hamza-value" lstProject={this.state.projectList} />
                            <ProjectCard />
                          </div>
                        </div>
                      </div>
                    </div>       
                    <div className="modal fade" id="addProject" tabIndex={-1} role="dialog" aria-labelledby="addProject" aria-hidden="true">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addProject">Add Project</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form action method="post">
                  <div className="row align-items-center">
                    <div className="col-md-2">
                      <div className="form-group">
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
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <select name="select" id="select" className="form-control">
                          <option value={0}>Project Name</option>
                          <option value={1}>Option #1</option>
                          <option value={2}>Option #2</option>
                          <option value={3}>Option #3</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="form-group">
                        <input type="text" placeholder="Completed Days" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <input type="text" placeholder="Budgeted Days" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <input type="text" placeholder="Current Progress" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <input type="text" placeholder="Status" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <select name="select" id="select" className="form-control">
                          <option value={0}>Task Owner</option>
                          <option value={1}>Option #1</option>
                          <option value={2}>Option #2</option>
                          <option value={3}>Option #3</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <textarea className="form-control" placeholder="Description" defaultValue={""} />
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn-black">Confirm</button>
                <button type="button" className="btn-black" data-dismiss="modal">Cancel</button>
              </div>
            </div>
          </div>
        </div>
                </div> 
            </div> 
            
        
        
        
        );
    }

}

export default Projects