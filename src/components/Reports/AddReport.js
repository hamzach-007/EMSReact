import React, { Component } from 'react';   
import AddReportDesign from './AddReportDesign';
import {Modal , Button} from 'react-bootstrap';

class AddReport extends Component{

    constructor(props){
       super(props);
    }

    render(){
         
       return(
        <Modal  show={this.props.show} onHide={this.props.onHide}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <div className="modal-content">
            <Modal.Header closeButton>
                <Modal.Title>{this.props.Title}</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{'max-height': 'calc(100vh - 210px)', 'overflow-y': 'auto'}}>
                <AddReportDesign 
                projectDropDown = {this.props.project}
                maintaskDropDown = {this.props.maintasks}
                projectchangeEvent = {this.props.projectchangeEvent}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button className="btn-black"  onClick={this.props.onHide}>
                    Confirm
                </Button>
                <Button className="btn-black" onClick={this.props.onHide}>
                    Cancel
                </Button>
            </Modal.Footer>
        </div>
    </Modal>

       )



    }
    

}

export default AddReport