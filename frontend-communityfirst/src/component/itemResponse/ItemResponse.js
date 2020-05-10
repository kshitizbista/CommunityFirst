import React from "react";

function ItemResponse({itemResponse, onDeleteClick, onUpdateClick}) {
const [body, setBody] = React.useState(itemResponse.body);
    const [isUpdateClicked, setUpdateClicked] = React.useState(false);

    const updateClick = () => {
        onUpdateClick(body);
        if (isUpdateClicked) {
            setUpdateClicked(false);
        } else {
            setUpdateClicked(true);
        }
    };
    return (
        <div className="card mt-3">
            <div className="card-body">
                <h6>ItemResponse</h6>
                <p className="commentBody">
                 {isUpdateClicked ?
                    <textarea className="form-control" id={itemResponse.id} value={body}
                    onChange={e => setBody(e.target.value)}/> :
                    body
                 }
                    <button className="deleteBtnPost" onClick={onDeleteClick}>Delete</button>
                    <button className="updateBtnPost" onClick={updateClick}>{isUpdateClicked ? 'Submit' : 'Update'}</button>

                </p>

            </div>
        </div>
    );
}

export default ItemResponse;