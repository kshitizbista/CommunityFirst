import React from "react";
import {assistanceType} from "../post/PostCreation";
import format from "date-fns/format";
<<<<<<< HEAD
<<<<<<< HEAD
import {Button} from "react-bootstrap";
=======
import {Button, Modal} from "react-bootstrap";
>>>>>>> 3610c2e... Added see more functionality to the posts page
=======
import {Button, Modal} from "react-bootstrap";
>>>>>>> 3610c2e5133feab2f362be514ef1649b7f457824

function Card(props) {

    let deleteBtn = null;
    if (props.showDelete) {
        deleteBtn = (<Button type="button" className="close" variant="primary" onClick={() => props.onDelete(props.id)} aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </Button>)
    }

    let editBtn = null;
    if (props.showEdit) {
        editBtn = (<Button type="button" className="close mr-1" variant="primary"
                           onClick={() => props.onEdit(props.id, props.title, props.description)} aria-label="Close">
            <span style={{"fontSize": "16px"}} aria-hidden="true">Edit</span>
        </Button>)
    }


    const seeMore = (<span>See More</span>)

    const checkDesc = () => {
        return props.maxDesc != null && props.description.length >= props.maxDesc
    }

    const getDesc = () => {
        if (checkDesc()) {
            return (props.description).substring(0, props.maxDesc );
        } else {
            return props.description;
        }
    }

    const seeMore = (<span>See More</span>)

    const checkDesc = () => {
        return props.maxDesc != null && props.description.length >= props.maxDesc
    }

    const getDesc = () => {
        if (checkDesc()) {
            return (props.description).substring(0, props.maxDesc );
        } else {
            return props.description;
        }
    }

    return (
        <>
<<<<<<< HEAD
<<<<<<< HEAD
            <div onClick = {props.delete}  className="card mb-2">
                <div className="card-body p-2">
=======
            <div className="card mb-2 card-cursor">
                <div className="card-body p-2" onClick={props.onCardClick}>
>>>>>>> 3610c2e... Added see more functionality to the posts page
=======
            <div className="card mb-2 card-cursor">
                <div className="card-body p-2" onClick={props.onCardClick}>
>>>>>>> 3610c2e5133feab2f362be514ef1649b7f457824
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

                        <div className="col">
                            <h5 className="text-secondary font-weight-bold mb-1"
                                style={{"fontSize": "14px"}}>{props.title}</h5>
                            <p className="m-0" style={{"fontSize": "14px"}}>{getDesc()} {checkDesc() && <span className="text-info see-more"> ...See More</span>}</p>
                        </div>
                        <div className="col-auto">
                            {deleteBtn}
                            {editBtn}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;
