import React, { Component } from 'react';
import {Modal , Button} from 'react-bootstrap';
import ReportFilterDesign from './ReportFilterDesign'
import AddReportDesign from './AddReportDesign'

class ReportFilter extends Component{
    
    constructor(props){
         super(props);

    }


    render(){

        return(
            
            <Modal show={this.props.show} onHide={this.props.onHide} backdrop = {'static'} keyboard = {'false'} >
                <div className="modal-content" style = {{width :"130%"}}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.Title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ReportFilterDesign 
                        projectDropDown = {this.props.project}
                        maintaskDropDown = {this.props.maintasks}
                        projectchangeEvent = {this.props.projectchangeEvent}
                        taskowernamesDropDown = {this.props.taskowernames}
                        ReportGridDateFormat = {this.props.ReportGridDateFormatFunc}
                        ReportfilterProjectDD = {this.props.ProjectDropDownValue}
                          />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="btn-black"  onClick={this.props.RefreshCall}>
                            Confirm
                        </Button>
                        <Button className="btn-black" onClick={this.props.onHide}>
                            Cancel
                        </Button>
                    </Modal.Footer>
                </div>
            </Modal>

            

        );

    }
}

export default ReportFilter;