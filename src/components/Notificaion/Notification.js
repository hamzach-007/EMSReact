import React, {Component} from "react";
import axios from 'axios';

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";



class Notification extends Component{

    
    constructor(props){
    super(props);
      this.state = {
          NotficationList : [],
          NotificationLength : 0,
          page : 0,
          rowsPerPage : 10
      };
      //this.NotificationMsgs = this.NotificationMsgs.bind(this);
    }

    handleChangePage = (event, newPage) => {
      this.setState({page : newPage})
     
    };
  
    handleChangeRowsPerPage = (event) => {
      this.setState({rowsPerPage : (parseInt(event.target.value, 10))}) ;
      this.setState({page : 0})
     
    };
          componentDidMount(){

          const NotifyObj = {
              UserId: localStorage.getItem("UserID")
          }

          axios({
              method: 'post',
              url: 'http://localhost:1316/api/Notification/GetNotification',
              headers: {}, 
              data: NotifyObj
            })
              .then(response => {
                  console.log(response);
                  console.log(response.data);
                  if(response.data.StatusCode == "200"){
                    console.log(res);
                    var res = response.data.Result;
                    this.setState({ NotficationList : res});
                    this.setState({NotificationLength : response.data.Result.length });
                  }
                  else{
                      
                      alert("No Notification");
                  }
              
              })

          }

         



    render(){

    /*   UserNotifications = Notification.map( item => {
        return(
              <tr>
                  <td>{item.res}</td>
              </tr>
        )
   } */

        return(
          <div>
        <div className="content mt-3">
        <div className="row">
        <div className="col-sm-12">
                <div className="card">
                    <div className="card-header">
                        <div className="row align-items-center">
                            <div className="col-sm-6"><h3>Notifications</h3></div>
                        </div>
                    </div>
                    <div className="card-body">
                    <TableContainer component={'div'}>
                    <Table id="bootstrap-data-table" className="table table-striped table-bordered">
                   <TableHead>
                      <TableRow>
                        <TableCell>Notification</TableCell>
                        <TableCell width="10%">Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {
                        this.state.NotficationList  != null ? this.state.NotficationList
                        .slice(this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage)
                        .map( item => {      
                            return(
                              <TableRow>
                                <TableCell>{item.NotificationMsg}</TableCell>
                                <TableCell><i className="fa ico-icon  fa-trash-o cursor-pointer"></i></TableCell>
                              </TableRow>
                              )}) : <div>Loading please wait...</div>
                      }
                    </TableBody>
                  </Table>
                      <TablePagination
                        component="div"
                        count={this.state.NotificationLength}
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
      </div>
        
        );    
    }
}

export default Notification
   


