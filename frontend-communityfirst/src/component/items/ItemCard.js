import React from "react";
import ItemResponseList from "../itemResponse/ItemResponseList";

function ItemCard({item, onDeleteClick, onUpdateClick}) {

    const [itemdescription, setItemdescription] = React.useState(item.itemdescription);
    const [isUpdateClicked, setUpdateClicked] = React.useState(false);

    const updateClick = () => {
        onUpdateClick(itemdescription);
        if (isUpdateClicked) {
            setUpdateClicked(false);
        } else {
            setUpdateClicked(true);
        }
    };

    return (
        <div className="card mt-3">
            <div>
                    {isUpdateClicked ?
                        <textarea className="form-control" id={item.id} value={item.itemdescription}
                                  onChange={e => setItemdescription(e.target.value)}/> : itemdescription
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