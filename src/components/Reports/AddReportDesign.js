import React, { Component } from 'react';  

class AddReportDesign extends Component{

    constructor(props){
        super(props);
    }

    render(){

        return(
            <div className="modal-body">
               <div>
                    <div className="form-group">
                        <div className="control-label col-md-3">
                            <label >Project</label>
                        </div>
                        <div className="col-md-9">
                            <select className="form-control" id="projectDropdown" onchange="ValidateProjectDropdown()"></select>
                            
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="control-label col-md-3">
                            <label >Project Description</label>
                        </div>
                        <div className="col-md-9">
                            <textarea readonly  id="txtareaProjectDescription" rows="1" cols="38">
                            </textarea>
                        </div>
                    </div>
                    {/* <div className="form-group" id="divProject">
                        <div className="control-label col-md-3">
                            <label >Enter Project</label>
                        </div>
                        <div className="col-md-9">
                            <input className="form-control" id="projectInput" placeholder="Project Name" />
                            <span id="projectInputErrorMessage" className="error">This field is required!</span>
                        </div>
                    </div> */}
                    <div className="form-group">
                        <div className="control-label col-md-3">
                            <label  for="textinput">Resource</label>
                        </div>
                        <div className="col-md-9">
                            <select className="form-control" id="resourceDropdown">
                                <option value="--Select--">--Select--</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="control-label col-md-3">
                            <label >Date</label>
                        </div>
                        <div className="col-md-9">
                            <input id="dateInput" className="form-control input-md" data-toggle="datepicker" placeholder="DD/MM/YYYY" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="control-label col-md-3">
                            <label >Actual Duration</label>
                        </div>
                        <div className="col-md-9">
                            <input id="durationInput" type="number" placeholder="Duration" className="form-control input-md" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="control-label col-md-3">
                            <label >Phase</label>
                        </div>
                        <div className="col-md-9 ui-widget">
                            <select className="form-control chosen" id="MaintasksDropdown" onchange="ValidateProjectDropdown()"></select>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="control-label col-md-3">
                           <label >Description</label>
                        </div>
                        <div className="col-md-9 ui-widget">
                            <select className="form-control chosen" id="tasksDropdown" onchange="ValidateTaskDropdown()"></select>
                        </div>
                    </div>
                    {/* <div className="form-group" id="divTasks">
                        <div className="control-label col-md-3">
                            <label >Enter Task/PBI</label>
                        </div>
                        <div className="col-md-9">
                            <textarea className="form-control" id="taskInput" placeholder="Enter missing task"></textarea>
                            <span id="taskInputErrorMessage" className="error">This field is required!</span>
                        </div>
                    </div> */}
                    <div className="form-group">
                        <div className="control-label col-md-3">
                            <label >Comment</label>
                        </div>
                        <div className="col-md-9 ui-widget">
                            {/* @*<select className="form-control chosen" id="subTasksDropdown" onchange="ValidateTaskDropdown()"></select>*@ */}
                            <textarea className="form-control txtArea" placeholder="Explain the task done in detail. Include project name for which the task was done" id="txtSubTaskArea"></textarea>
                        </div>
                    </div>

                </div>
            </div>

         )

    }

}

export default AddReportDesign