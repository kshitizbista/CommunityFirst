import React, {useState} from "react";
import {assistanceType} from "../post/PostCreation";
import format from "date-fns/format";
import {Modal, Button, Form, ButtonGroup} from "react-bootstrap";

function Card(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let btn = null;
    if (props.showDelete){
        btn = (<Button type="button" className="close" variant="primary" onClick={handleShow} aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </Button>)
    }

    const modal = (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete this item?</Modal.Body>
            <Modal.Footer>
                <Button className="btn btn-danger" variant="primary" onClick={() => {props.onDelete(props.id) ; handleClose(); }} >Delete</Button>
                <Button variant="secondary" onClick={handleClose} >Close</Button>
            </Modal.Footer>
        </Modal>
    )

    return (
        <>
            <div className="card mb-2">
                <div className="card-body p-2">
                    <div className="row mt-2">
                        <div className="col-auto pr-0">
                            <div className="row flex-nowrap no-gutters">
                                <div className="col-auto">
                                    <div className="figure">
                                        {/*<img src={require("../../assets/alicia-keys.jpg")} alt="..."*/}
                                        {/*     className="rounded-circle mr-2" width="45px"*/}
                                        {/*     height="45px"/>*/}
                                        <span className="img-placeholder">
                                            <p>Photo</p>
                                        </span>
                                    </div>

                                </div>
                                <div className="col-auto align-self-center">
                                    <p className="font-weight-bolder mb-0"
                                       style={{"fontSize": "13px"}}>
                                        {props.firstname} {props.lastname}
                                    </p>
                                    <p className="text-primary font-weight-light mb-0"
                                       style={{"fontSize": "12px"}}>
                                        {props.serviceType === assistanceType.REQUEST_HELP ? 'Requesting Help' : 'Offering Help'}</p>
                                    <p className="text-secondary font-weight-light mb-0"
                                       style={{"fontSize": "12px"}}>
                                        {format(new Date(props.postedDate), "MMMM dd, yyyy")}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg">
                            <h5 className="text-secondary font-weight-bold mb-1"
                                style={{"fontSize": "14px"}}>{props.title}</h5>
                            <p className="m-0" style={{"fontSize": "14px"}}>{props.description}</p>
                        </div>
                        <div className = "col-sm">
                            {btn}
                        </div>
                    </div>
                    {modal}
                </div>
            </div>
        </>
    );
}

export default Card;
