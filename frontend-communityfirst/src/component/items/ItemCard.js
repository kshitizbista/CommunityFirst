import React from "react";
import ItemResponseList from "../itemResponse/ItemResponseList";

function ItemCard({item, onDeleteClick, onUpdateClick}) {

    const [body, setBody] = React.useState(item.body);
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
                <h2> Your Posts </h2>
                    {isUpdateClicked ?
                        <textarea className="form-control" id={item.id} value={body}
                                  onChange={e => setBody(e.target.value)}/> :
                        body
                    }
                    <button className="deleteBtnItem" onClick={onDeleteClick}>Delete</button>
                    <button className="updateBtnItem"
                            onClick={updateClick}>{isUpdateClicked ? 'Submit' : 'Update'}</button>
                <br/>
                <br/>

            </div>
        </div>
    );
}

export default ItemCard;