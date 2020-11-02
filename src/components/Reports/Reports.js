import React, { Component } from 'react';
import ReportFilter from './ReportFilter';
import AddReport from './AddReport';
import axios from 'axios';
import AddRecord from '../AddRecord/AddRecord';
import moment from 'moment'

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import { makeStyles } from "@material-ui/core/styles";
class Reports extends Component{

    constructor(props){
        super(props);
        this.state = {
            lstReport : null,
            lstProjectNames : null,
            lstMainTask : null,
            ProjectName : '',
            ProjectType : '',
            MainTask : '',
            SubTask : '',
            TaskOwner : '',
            lstTaskOwnerName : null,
            Days : '',
            StartDate : '',
            EndDate : '',
            PopUpBit : false,
            Title : 'Reports Filter',
            AddReportTitle : 'Add Assignment',
            page : 0,
            rowsPerPage : 10,
            ReportCount : 0,
           /*  Subtask : null */
           //#region  Report Filter For Staff 
            ProjectIdFilter : ""
           //#endregion
        };
       /*  this.LoadSubTasks = this.LoadSubTasks.bind(); */
    }

    componentDidMount(){
       this.LoadReportsData();
       this.LoadProjectsName();
       this.LoadMainTasks();
       this.LoadTasksOwnerName();
       
    }
    useStyles = makeStyles({
        table: {
          minWidth: 650
        }
      });
    handleChangePage = (event, newPage) => {
        this.setState({page : newPage})
        //setPage(newPage);
      };
    
      handleChangeRowsPerPage = (event) => {
        this.setState({rowsPerPage : (parseInt(event.target.value, 10))}) ;
        //setRowsPerPage(parseInt(event.target.value, 10));
        this.setState({page : 0})
        //setPage(0);
      };
    //#region API Calls 
    
    LoadReportsData = () => {
        try{
            const objRptParam = {"FromDate":"",
                "IsApproved":null,
                "LoggedInUserId":localStorage.getItem('UserID'),
                "MainTaskID":"0",
                "ProjectId": this.state.ProjectIdFilter == null || this.state.ProjectIdFilter == ""  ? 'All' : this.state.ProjectIdFilter,  //"All",
                "TaskName":null,
                "TaskOwnerId":"",
                "taskTypePrefixes":"",
                "ToDate":""
            };
              axios({
                method: 'post',
                url: 'http://localhost:1316/api/Reports/GetAssignments',
                headers: {}, 
                data: objRptParam
              })
                .then(res => {
                    var _tempCount = 0;
                    this.setState({lstReport : res.data.Result });
                    res.data.Result.map( item => {
                        item.Project === "TOTAL" ? _tempCount = _tempCount + 0 : _tempCount++; 
                    });
                    this.setState({ReportCount : _tempCount });
                });
        }
        catch(e){alert(e);}
    }

    LoadProjectsName = () => {
        try{
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
                this.setState({lstProjectNames : res.data.Result });
            });
        }
        catch(e){ alert(e); }   
    }
    
    LoadMainTasks = () => {
        try{
            
            axios({
            method: 'get',
            url: 'http://localhost:1316/api/MainTask/GetFilterMainTaskList'
            })
            .then(res => {
                this.setState({lstMainTask : res.data.Result });
            });
        }
        catch(e){ alert(e); }   
    }

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
                this.setState({lstTaskOwnerName : res.data.Result });
            });
        }
        catch(e){ alert(e); }   
    }
  /*   LoadSubTasks=()=>{
        try{
            const userObj = {
                projectID: this.state.lstProjectNames.ID,
                mainTaskID : this.state.lstMainTask.Id,
            };
            axios({
            method: 'post',
            url: 'http://localhost:1316/api/SubTasks/GetSubTaskList',
            headers: {}, 
            data: userObj
            })
            .then(res => {
                this.setState({Subtask: res.data.Result });
                
            });
        }
        catch(e){ alert(e); }   
    }
 */


    //#endregion
    
    //#region Click events 
    
    OpenfilterBox = () => {
        this.setState({PopUpBit : true});
    }

    handleClose = () =>{
        this.setState({PopUpBit : false});
    }

    RefreshGridData = () => {
        try{
            const objRptParam = {"FromDate": this.state.StartDate,
                "IsApproved":null,
                "LoggedInUserId":localStorage.getItem('UserID'),
                "MainTaskID":"0",
                "ProjectId": this.state.ProjectIdFilter == null || this.state.ProjectIdFilter == ""  ? 'All' : this.state.ProjectIdFilter,
                "TaskName":null,
                "TaskOwnerId":"",
                "taskTypePrefixes":"",
                "ToDate": this.state.EndDate
            };
              axios({
                method: 'post',
                url: 'http://localhost:1316/api/Reports/GetAssignments',
                headers: {}, 
                data: objRptParam
              })
                .then(res => {
                    this.setState({lstReport : res.data.Result });
                    this.setState({PopUpBit : false});
                });
        }
        catch(e){alert(e);}
    }

    HandleDate = (e) => {
        try{
            var target = e.target;
            var value = target.value;
            var tempDate = moment(e.target.value).format("MM/DD/YYYY") 
            //this.setState({ AssignmentDateTime : tempDate});
            var name = target.name;
            this.setState( {
                [name] : tempDate
            })
        }
        catch(ex){
            alert(ex);
        }
    }

    ProjectDropDownSelectedValue = (e) =>{
        try{
            this.setState({ ProjectIdFilter : e.target.value }) ; 
        }
        catch(ex){
            alert(ex);
        }
    }
    
   /*  HandleChange = (e) => {
        var target = e.target;
        var value = target.value;
        //alert(value);
        // var name = target.name;
        // this.setState( {
        //     [name] : value
        // })
    } */

    //#endregion

    


    render(){
        
        // let isPending = false;
        // if(this.state.lstProjectNames === null || this.state.lstProjectNames === undefined || this.state.lstReport === null || this.state.lstReport === undefined ){
        //     isPending = true;
        // }
        // else{
        //     isPending = false;
        // }
        // console.log("Displaying world class data...");
        // console.log(isPending);

     /*   let ReportData = this.state.lstReport != null ? 
        this.state.lstReport.map( item => {
            if(item.ProjectNameForWeek == null || item.ProjectNameForWeek == 'null'){
                 return(
                       <tr>
                           <td>{item.Project}</td>
                           <td>{item.Date}</td>
                           <td>{item.TaskOwner}</td>
                           <td>{item.MainTaskName}</td>
                           <td>{item.Task}</td>
                           <td>{item.SubTask}</td>
                           <td>{item.Days}</td>
                       </tr>
                 )
            }
       }) : <div>Loading please wait...</div>
 */
      
  
        return(
            
              <div>
<div className="content mt-3">
                    <div className="row">
                       <div className="col-sm-12">
                           <div className="card">
                               <div className="card-header">
                                    <div className="row align-items-center">
                                        <div className="col-sm-6"><h3>Reports</h3></div>
                                        <div className="col-sm-3 text-right">
                                            {/* <select name="select" id="select" className="form-control">
                                                <option value="excel">Export to Excel</option>
                                                <option value="pdf">Export to PDF</option>
                                            </select> */}
                                        </div>
                                        <div className="col-sm-3 text-right">
                                            {/* <button type="button" className="btn-black mr-2">Export <i className="fa fa-plus"></i></button> */}
                                            <button onClick={this.OpenfilterBox} type="button" className="btn-black" data-toggle="modal" data-target="#reportsFilter">Reports Filter</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                   {/*  <table  className="table">
                                            <thead>
                                                <tr>
                                                    <th>Project Name</th>
                                                    <th>Date</th>
                                                    <th>Task Owner</th>
                                                    <th>Main Task</th>
                                                    <th>Sub Task</th>
                                                    <th>Description</th>
                                                    <th>Days</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {ReportData}
                                            </tbody>
                                    </table> */}

                                    <TableContainer component={'div'}>
                                        <Table className={this.useStyles.table} aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell align="center">Project Name</TableCell>
                                                    <TableCell align="center">Date</TableCell>
                                                    <TableCell align="center">Task Owner</TableCell>
                                                    <TableCell align="center">Main Task</TableCell>
                                                    <TableCell align="center">Sub Task</TableCell>
                                                    <TableCell align="center">Description</TableCell>
                                                    <TableCell align="center">Days</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {this.state.lstReport != null ? this.state.lstReport
                                                  .slice(this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage)
                                                  .map((row, index) => (
                                                     row.Project === "TOTAL" ? "" : 
                                                    <TableRow >
                                                      <TableCell align="center">{row.Project}</TableCell>
                                                      <TableCell align="center">{row.Date}</TableCell>
                                                      <TableCell align="center">{row.TaskOwner}</TableCell>
                                                      <TableCell align="center">{row.MainTaskName}</TableCell>
                                                      <TableCell align="center">{row.Task}</TableCell>
                                                      <TableCell align="center" style={{wordBreak : "break-all"}}>{row.SubTask}</TableCell>
                                                      <TableCell align="center">{row.Days}</TableCell>
                                                    </TableRow>
                                                  )) : <div>Loading please wait...</div>}
                                                
                                            </TableBody>
                                        </Table>
                                    <TablePagination
                                        component="div"
                                        count={this.state.ReportCount}
                                        page={this.state.page}
                                        onChangePage={this.handleChangePage}
                                        rowsPerPage={this.state.rowsPerPage}
                                        onChangeRowsPerPage={this.handleChangeRowsPerPage}
                                    />
                                    </TableContainer>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
                
                    <ReportFilter 
                        Title={this.state.Title} 
                        show={this.state.PopUpBit} 
                        onHide={this.handleClose}  
                        project = {this.state.lstProjectNames}
                        maintasks = {this.state.lstMainTask}
                        projectchangeEvent = {this.HandleChange}
                        taskowernames = {this.state.lstTaskOwnerName}
                        ReportGridDateFormatFunc = {this.HandleDate}
                        ProjectDropDownValue = {this.ProjectDropDownSelectedValue}
                        RefreshCall = {this.RefreshGridData}
                    />
              </div>
                

        );

    }

}

export default Reports