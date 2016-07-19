import React, { Component, PropTypes } from 'react';
import {Button} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';

import ReviewForm from '../forms/ReviewForm';

export default class StudentInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false
        };

        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
    }

    closeModal() {
        this.setState({showModal: false});
    }

    openModal() {
        this.setState({showModal: true});
    }

    getSubmittedButton() {
        return(
            <div>
                <Button bsStyle="success" bsSize="xsmall">
                    <span className="glyphicon glyphicon-ok"/>
                </Button>
            </div>
        );
    }

    getUnsubmittedButton() {
        return(
            <Button bsStyle="danger" bsSize="xsmall" onClick={this.openModal}>
                <span className="glyphicon glyphicon-remove"/>
            </Button>
        );
    }

    get360Form() {
        return (
            <div>
                {this.getUnsubmittedButton()}
                <Modal bsSize ="large" show={this.state.showModal} onHide={this.closeModal}>
                    <Modal.Header>
                        <Modal.Title>360 Review</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ReviewForm/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.closeModal}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }

    getMid360Field() {
        if(this.props.student.mid360.completed) {
            return (
                this.getSubmittedButton()
            );
        } else {
            return (
                this.get360Form()
            );
        }
    }

    getFinal360Field() {
        if(this.props.student.final360.completed) {
            return (
                this.getSubmittedButton()
            );
        } else {
            return (
                this.get360Form()
            );
        }
    }

    render() {
        return (
                <tr>
                    <td>{this.props.student.name}</td>
                    <td>{this.props.student.email}</td>
                    <td>
                        <center>
                            {this.getMid360Field()}
                        </center>
                    </td>
                    <td>
                        <center>
                            {this.getFinal360Field()}
                        </center>
                    </td>
                </tr>
        );
    }
}