import React from "react";

function ItemsSubMenu({onRequestedCheckBoxClick, onOfferedCheckBoxClick}) {
    return (
        <div className="bg-white mb-3 p-2">
            <div className="row no-gutters justify-content-center">
                <div className="col-auto mr-2">
                    <span className="font-weight-bold">Service Type:</span>
                </div>
                <div className="col-auto">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="request-option" value="REQUEST_ITEM"
                               defaultChecked={true} onChange={(e) => onRequestedCheckBoxClick(e.target.checked)}/>
                        <label className="form-check-label" htmlFor="request-option">Requested</label>
                    </div>
                </div>
                <div className="col-auto">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="offer-option" value="OFFER_ITEM"
                               defaultChecked={true} onChange={(e) => onOfferedCheckBoxClick(e.target.checked)}/>
                        <label className="form-check-label" htmlFor="offer-option">Offered</label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemsSubMenu;
