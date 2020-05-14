import React from "react";
import {assistanceType} from "../post/PostCreation";
import format from "date-fns/format";
import {Button} from "react-bootstrap";

function ItemCard(props) {

    let deleteBtn = null;
    if (props.showDelete) {
        deleteBtn = (<Button type="button" className="close" variant="primary" onClick={() => props.onDelete(props.id)} aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </Button>)
    }

    let editBtn = null;
    if (props.showEdit) {
        editBtn = (<Button type="button" className="close" variant="primary"
                           onClick={() => props.onEdit(props.id, props.title, props.description)} aria-label="Close">
            <span aria-hidden="true">Edit</span>
        </Button>)
    }


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
                        <div className="col-sm">
                            {deleteBtn}
                            {editBtn}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ItemCard;

