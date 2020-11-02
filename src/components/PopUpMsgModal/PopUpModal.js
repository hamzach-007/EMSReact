import React, { Component } from 'react';
import {Modal , Button , Form} from 'react-bootstrap'


class PopUpModal extends Component{
    
    constructor(props){
         super(props);

    }


    render(){

        return(
            
            <Modal show={this.props.show} onHide={this.props.onHide} backdrop = {'static'} keyboard = {'false'} >
                <div className="modal-content" style = {{width :"100%"}}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.Title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.props.errorMsgs}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="btn-black"  onClick={this.props.onHide}>
                            Confirm
                        </Button>
                        {/* <Button className="btn-black" onClick={this.props.hide}>
                            Cancel
                        </Button> */}
                    </Modal.Footer>
                </div>
            </Modal>

            

        );

    }
}

export default PopUpModal;