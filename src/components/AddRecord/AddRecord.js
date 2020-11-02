import React, {Component} from 'react';
import {Modal , Button, Form} from 'react-bootstrap';
import axios from 'axios';
import moment from 'moment'

class AddRecord extends Component{

    constructor(props){
        super(props);
        this.state={
            //#region Add Records States
            ProjectName : "",
            TaskName : "",
            AssignmentDateTime : "",
            ActualDuration : "",
            Comment : "",
            MainTaskID : "",
            //#endregion
            ProjectDescription : "",
            

            PhaseDescription : null,
            ProjectId : null
        }
    }
   
    componentDidMount(){
        
        this.checkUser();
    
    }
    
    checkUser=()=>{
        try{
            if(localStorage.getItem("Role") == 'Admin'){
                return false;
            }
            else{
                return true;
            }
        }
        catch(ex){
            return true;
        }
    }

    
    //#region  Events 

    ReportProjectDDPopUpChange = (e) =>{
        var _msg = e.target[e.target.selectedIndex].getAttribute('ddAttr');
        var _projectID = e.target[e.target.selectedIndex].getAttribute('ddAttrProjectID');
        //alert(e.target.selectedOptions[0].getAttribute('ddAttr')); 
        if(_msg !== null && _projectID !== null){
            this.setState({
                ProjectDescription : _msg,
                ProjectId : _projectID,
                ProjectName : e.target.value
            });
        }
    }

    HandleChangeTask = (e) => {
        var target = e.target;
        var value = target.value;
        var maintaskids = e.target[e.target.selectedIndex].getAttribute('ddAttrMainTaskID');
        this.setState({MainTaskID : maintaskids});
        this.LoadPhaseDescription(this.state.ProjectId, maintaskids);
    }

    HandleChangeDescription = (e) => {
        try{
           this.setState({ TaskName : e.target.value});
        }
        catch(ex){
           alert(ex);
        }
    }

    

    AssignmentDateChangedEvent = (e) => {
        try{
            var tempDate = moment(e.target.value).format("MM/DD/YYYY") 
            this.setState({ AssignmentDateTime : tempDate});
        }
        catch(ex){
           alert(ex);
        }
    }

    handleChangeEvent = (e) =>{
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

    //#endregion

    

    SaveRecords = (e) => {
        try{
            var RequestObj = {
               
                ID : "0", // it's 0 for save case later we will set proper value here.
                ProjectName : this.state.ProjectName,
                TaskName : this.state.TaskName,
                TaskOwnerName : localStorage.getItem("UserName"), // need to change here 
                AssignmentDateTime : this.state.AssignmentDateTime,
                ActualDuration : this.state.ActualDuration,
                Type : "Digital Marketing", // it's hardcoded in ems .net need to discuss it with faisal bhai
                SubTaskName : this.state.Comment,
                TaskType : "N", // hardcoded later we will change
                MainTaskID : this.state.MainTaskID
            };

            axios({
                method: 'post',
                url: 'http://localhost:1316/api/Reports/SaveAssignments',
                headers: {}, 
                data: RequestObj
            })
            .then(res => {
                alert("Record added ");
                window.location.reload(false);
                
            });

        }
        catch(ex){
             alert(ex);
        }
    }
 
    LoadPhaseDescription = (Projectid, MainTaskId) => {
        try{
            const Obj = {
                projectID : Projectid,
                maintaskID :MainTaskId
            }
            axios({
                method: 'post',
                url: 'http://localhost:1316/api/Tasks/GetTaskDescription',
                headers: {}, 
                data: Obj
            })
            .then(res => {
                this.setState({PhaseDescription : res.data.Result });
                
            });
        }
        catch(e){ 
            alert(e); 
        }   
    }

    

    
    render(){
     
        var ProjectNameList = null;
        if(localStorage.getItem("Role") === "Staff" && this.props.ProjectNameMapped !== null && this.props.Name !== null){
            
            if(this.props.ProjectNameMapped.length > 0){
                ProjectNameList = this.props.Name.map( item => {
                    for(var y = 0; y < this.props.ProjectNameMapped.length; y++){
                        
                        if(this.props.ProjectNameMapped[y] === item.Name){
                            return( <option ddAttrProjectID={item.ID} ddAttr={item.ProjectDescription} value={item.Name} >{item.Name}</option>);
                        }
                    }
                });
                
            }
        }
        else{
            if(this.props.Name !== null){
                ProjectNameList = this.props.Name.map( item => {
                    return( <option ddAttrProjectID={item.ID} ddAttr={item.ProjectDescription} value={item.Name} >{item.Name}</option>);
                });
            }
            
        }

    
       var MainTaskList = this.props.Maintasks == null ? '' : this.props.Maintasks.map( item => {
        
            var ProjectIdFromTask =item.ProjectIDs;
            if (this.state.ProjectID !== null) {
                var splitArr = ProjectIdFromTask.split(",");
                for (var i = 0; i < splitArr.length; i++) {
                    
                    if (this.state.ProjectId == splitArr[i]) {
                        return(
                            <option ddAttrMainTaskID={item.Id} value={item.MainTaskName} >{item.MainTaskName}</option>
                    );
                    }
                }
            }
       });

        var TaskOwnerNameList = this.props.TaskOwnerNameRecord == null ? '' : this.props.TaskOwnerNameRecord.map( item => {
            return(
                <option value={item.ID}>{item.TaskOwnerName}</option>
            );
        });

        var TaskNameList = this.state.PhaseDescription == null ? '' :  this.state.PhaseDescription.map( (item,index) => {
            
            return(
                <option value={item.taskName}>{item.taskName}</option>
            );
            
        });


       
    return(
    
        // {/* <div class="row">
        //     <div class="modal fade" data-keyboard="false" data-backdrop="static" id="assignmentModal" tabindex="-1" role="dialog" aria-labelledby="assignmentModalLabel" aria-hidden="true">
        //         <div class="modal-dialog" role="document"> */}

            <Modal show={this.props.show} onHide={this.props.hide} backdrop = {'static'} keyboard = {'false'}>
                    <div class="modal-content">
                    <Modal.Header closeButton>
                        <Modal.Title>Add Assignment</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <div className="col-md-12">
                                <form className="form-horizontal  ">
                                    <div className="form-group ">
                                        <label className="control-label col-md-3 ">Project</label>
                                        <select className="form-control col-md-12 " id="projectDropdown" onChange={this.ReportProjectDDPopUpChange} >
                                        <option value="" disabled selected hidden>--Select--</option>
                                      {/*  {this.checkUser == false ? {ProjectNameList} : {ProjectNameMappedList}}   */}
                                    {/* localStorage.getItem("Role") == 'Admin'? {ProjectNameList} : {ProjectNameMappedList}}  */}
                                        {ProjectNameList}
                                      </select>   
                                    </div>

                                    <div className="form-group">
                                        <label className="control-label col-md-5">Project Description</label>
                                        <textarea className="form-control col-md-12"  readOnly= {true} value={this.state.ProjectDescription}   style={{resize:'none'}} id="txtareaProjectDescription" rows="3" cols="50">{this.props.DescriptionText}</textarea>
                                    </div>

                                   {/*  <div className="form-group" id="divProject">
                                        <label className="control-label col-md-3">Enter Project</label>
                                        <input className="form-control col-md-12" id="projectInput" placeholder="Project Name" />
                                    </div> */}
                                    <div className="form-group">
                                    <label className="control-label col-md-3" for="textinput">Resource</label>
                                        {/* <select className="form-control col-md-12" readOnly= {true} disabled id="resourceDropdown">
                                       <option value="--Select--">{localStorage.getItem("UserName")}</option> */}
                                      
                                      <select className="form-control col-md-12" id="resourceDropdown" readOnly= {this.checkUser()} disabled={this.checkUser()} id="resourceDropdown" >
                                      {this.checkUser() == false ? (
                                        <option value="" disabled selected hidden>--Select--</option>) : (
                                        <option value="--Select--">{localStorage.getItem("UserName")}</option> // need to change later
                                        )}
                                      {TaskOwnerNameList}
                                    </select>
                                    
                                    </div>

                                    <div className="form-group">
                                        <label className="control-label col-md-3">Date</label>
                                        <input type ="date"  style={{ border: '1px solid #ccc'}} id="dateInput" onChange={this.AssignmentDateChangedEvent} className="form-control input-md col-md-12"  placeholder="DD/MM/YYYY"/>
                                    </div>

                                    <div className="form-group">
                                        <label className="control-label col-md-5">Actual Duration</label>
                                        <input style={{ border: '1px solid #ccc' }} className="form-control input-md" name="ActualDuration" id="durationInput" onChange={this.handleChangeEvent} type="number" placeholder="Duration"/>
                                    </div>

                                    <div className="form-group">
                                        <label className="control-label col-md-3">Phase</label>
                                        <select onChange={this.HandleChangeTask} className=" col-md-12 ui-widget form-control chosen" id="MaintasksDropdown" onchange="ValidateProjectDropdown()">
                                        <option value="" disabled selected hidden>--Select--</option>   
                                            {MainTaskList}
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label className="control-label col-md-3">Description</label>                        
                                        <select className=" col-md-12 ui-widget form-control chosen" id="tasksDropdown" onClick={this.HandleChangeDescription} onSelect={this.HandleChangeDescription} onChange={this.HandleChangeDescription}>
                                            <option value="" disabled selected hidden>--Select--</option>
                                            {TaskNameList}
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label className="control-label col-md-3">Comment</label>                                      
                                        <textarea className="col-md-12 ui-widget form-control txtArea" name="Comment" onChange={this.handleChangeEvent} placeholder="Explain the task done in detail. Include project name for which the task was done" id="txtSubTaskArea"></textarea>                                    
                                    </div>

                                    <div style={{display:'none'}} className="form-group" id="divSubTasks">
                                    <div className="col-md-3">
                                        <label className="control-label col-md-3">Enter Description</label>
                                    </div>
                                    <div className="col-md-9">
                                        <textarea className="form-control" id="subTaskInput" placeholder="Sub Task"></textarea>
                                    </div>
                                    </div>
                            </form>
                        </div>
             
                   
            
    
                    </Modal.Body>
                    <Modal.Footer>
                        
                        <Button className="btn-black" onClick={this.SaveRecords} > 
                            Save
                        </Button>
                        <Button className="btn-black" onClick={this.props.hide}>
                            Cancel
                        </Button>
                    </Modal.Footer> 
                    </div>  
                </Modal> 

        
  
    );

            
    }
}
export default AddRecord