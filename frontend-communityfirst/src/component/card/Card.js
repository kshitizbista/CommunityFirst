import React from "react";
import {assistanceType} from "../post/PostCreation";
import format from "date-fns/format";
function Card(props) {

    let btn = null;
    if (props.showDelete){
        btn = (<button type="button" className="close" data-toggle="modal" data-target="#exampleModal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>)
    }

    const modal = (
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Delete</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        Are you sure you want to delete this item?
                    </div>
                    <div className="modal-footer">
                        <button onClick={() => props.onDelete(props.id)} type="button" className="btn btn-danger" data-dismiss="modal">Delete</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
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
