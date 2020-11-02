import React, { Component } from 'react'

class ProjectsGrid extends Component{

    constructor(props){
        super(props);
       
    }
    
    
    render(){
      let ProjectData = '<div>Please wait</div>';
      if(this.props.lstProject != null){
         ProjectData = this.props.lstProject.map( item =>{
                return(
                  <tr>
                    <td scope="row">{item.Name}</td>
                    <td>105</td>
                    <td>100</td>
                    <td>
                      <div className="progress">
                        <div className="progress-bar bg-danger" role="progressbar" style={{width: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>100%</div>
                      </div>
                    </td>
                    <td>Budget Exeeded</td>
                    <td><i className="fa ico-icon  fa-pencil cursor-pointer" /></td>
                  </tr>
                )
              });
     
      }  
      
        return(
             
            <div className="list-layout">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Project Name</th>
                  <th scope="col">Completed Days</th>
                  <th scope="col">Budgeted Days</th>
                  <th scope="col">Progress Bar</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  ProjectData
                }
                
              </tbody>
            </table>
          </div>






        );
        




    }


}

export default ProjectsGrid