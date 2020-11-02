import React, { Component } from 'react';
import axios from 'axios';

class ReportFilterDesign extends Component{

    constructor(props){
        super(props);
      this.state={
        projectid : -1,
        maintaskid : -1,
        lstSubtask : null
      }
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this); 
        this.LoadSubTasks = this.LoadSubTasks.bind(this); 
    }
    HandleChangeProject = (e) => {
      var target = e.target;
      var value = target.value;
      this.setState({
        projectid : value
      })
  }
  HandleChangeMaintask = (e) => {
    var target = e.target;
    var value = target.value;
    this.setState({
      maintaskid : value
    })
    this.LoadSubTasks(this.state.projectid,target.value);
    
 
}
   
    
    LoadSubTasks(projectID, maintaskID){
      try{
          const userObj = {
              projectID: projectID, //this.state.projectid,
              mainTaskID: maintaskID //this.state.maintaskid,
          };
          axios({
          method: 'post',
          url: 'http://localhost:1316/api/SubTasks/GetSubTaskList',
          headers: {}, 
          data: userObj
          })
          .then(res => {
              this.setState({lstSubtask: res.data.Result });
              
          });
      }
      catch(e){ alert(e); }   
  }

    
    onFocus(e){

      e.currentTarget.type = "date";
       e.currentTarget.focus();
    }
    onBlur(e) {
      e.currentTarget.type = "text";
      e.currentTarget.blur();
    }
     
    render(){
        
      //alert(this.state.Subtask);
        
        var TempprojectsList = this.props.projectDropDown == null ? '' : this.props.projectDropDown.map( item => {
             
             return(
                    <option value={item.ID}>{item.Name}</option>
             );
        });
        
        var TempmainTaskList = this.props.maintaskDropDown == null ? '' : this.props.maintaskDropDown.map( item => {
             
            return(
                   <option value={item.Id}>{item.MainTaskName}</option>
            );
       });

       var SubTaskList = this.state.lstSubtask == null ? '' : this.state.lstSubtask.map( item => {
        return(
               <option value={item.SubtaskId}>{item.TaskName}</option>
        );
    });

    var TaskOwnerNameList = this.props.taskowernamesDropDown == null ? '' : this.props.taskowernamesDropDown.map( item => {
      return(
             <option value={item.ID}>{item.TaskOwnerName}</option>
      );
  });
   // alert(SubTaskList);
   return(
    <div className="modal-body">
   <div className="row">
   {localStorage.getItem("Role") == "Admin" ? (
     <>
      <div className="col-md-8">
        <div className="form-group">               
          <select name="select" onChange={this.props.ReportfilterProjectDD} id="select" className="form-control" style={{ boxShadow: ' 3px 4px 10px #888888' }}>
            <option value="" disabled selected hidden>Project Name...</option>
            {TempprojectsList}
          </select>
      </div>
    </div>
    <div className="col-md-4">
      <div className="form-group">
          <select name="select" id="select" className="form-control" style={{ boxShadow: ' 3px 4px 10px #888888' }}>
            <option value="" disabled selected hidden>Project Type...</option>
            <option value="All">All</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Software Development">Software Development</option>
          </select>
      </div>
    </div>
    <div className="col-md-6">
      <div className="form-group">
          <select name="select" id="select" onChange={this.HandleChangeMaintask} className="form-control" style={{ boxShadow: ' 3px 4px 10px #888888' }}>
              <option value="" disabled selected hidden>Main Task...</option>
              {TempmainTaskList}
          </select>
      </div>
    </div>
    <div className="col-md-6">
      <div className="form-group">
          <select name="select" id="select"  className="form-control" style={{ boxShadow: ' 3px 4px 10px #888888' }}>
            <option value="" disabled selected hidden >Sub Task...</option>
                {SubTaskList}
          </select>
      </div>
    </div>
    <div className="col-md-6">
      <div className="form-group">
          <select name="select" id="select" className="form-control" style={{ boxShadow: ' 3px 4px 10px #888888' }}>
          <option value="" disabled selected hidden>Task Owner...</option>
              {TaskOwnerNameList}
          </select>
      </div>
    </div>
     <div className="col-md-6">
      <div className="form-group">
          <input style={{ border: '1px solid #ccc',boxShadow: ' 3px 4px 10px #888888' }} type="text" placeholder="Days" className="form-control" />
      </div>
    </div>
     <div className="col-md-6">
      <div className="form-group">
        <div className="input-group date" id="startDate">  
          <input type="text"  onFocus={ this.onFocus } onBlur={ this.onBlur } style={{ border: '1px solid #ccc',boxShadow: ' 3px 4px 10px #888888' }} placeholder="Start Date" className="form-control" />
          {/* <div className="input-group-addon"><i className="fa fa-calendar"></i></div> */}
        </div>
      </div>
    </div>
     <div className="col-md-6">
      <div className="form-group">
         <div className="input-group date" id="endDate">
         <input type="text"  onFocus={ this.onFocus } onBlur={ this.onBlur }  style={{ border: '1px solid #ccc',boxShadow: ' 3px 4px 10px #888888' }} placeholder="End Date" className="form-control" />
         {/*  <div className="input-group-addon"><i className="fa fa-calendar"></i></div> */}
      </div>
      </div>
    </div>
    </>):(
      <>
      <div className="col-md-12">
      <div className="form-group">                
          <select name="select" onChange={this.props.ReportfilterProjectDD} id="select" className="form-control" style={{ boxShadow: ' 3px 4px 10px #888888' }}>
            <option value="" disabled selected hidden>Project Name...</option>
            {TempprojectsList}
          </select>
      </div>
    </div>
      <div className="col-md-6">
      <div className="form-group">
        <div className="input-group date" id="startDate">  
          <input type="text" name="StartDate" onChange={this.props.ReportGridDateFormat} onFocus={ this.onFocus } onBlur={ this.onBlur } style={{ border: '1px solid #ccc',boxShadow: ' 3px 4px 10px #888888' }} placeholder="Start Date" className="form-control" />
          {/* <div className="input-group-addon"><i className="fa fa-calendar"></i></div> */}
        </div>
      </div>
    </div>
     <div className="col-md-6">
      <div className="form-group">
         <div className="input-group date" id="endDate">
         <input type="text" name="EndDate" onChange={this.props.ReportGridDateFormat} onFocus={ this.onFocus } onBlur={ this.onBlur }  style={{ border: '1px solid #ccc',boxShadow: ' 3px 4px 10px #888888' }} placeholder="End Date" className="form-control" />
         {/*  <div className="input-group-addon"><i className="fa fa-calendar"></i></div> */}
      </div>
      </div>
    </div>
    </>) }
  </div>


    </div>
);
    }

    

}

export default ReportFilterDesign