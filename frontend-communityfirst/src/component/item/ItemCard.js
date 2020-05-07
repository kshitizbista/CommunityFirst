import React from "react";


function ItemCard({ post, onDeleteClick, onUpdateClick }) {

    const [body, setBody] = React.useState(post.body);
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
                <h2> Status </h2>
                {isUpdateClicked ?
                    <textarea className="form-control" id={post.id} value={body}
                        onChange={e => setBody(e.target.value)} /> :
                    body
                }
                <button className="deleteBtnPost" onClick={onDeleteClick}>Delete</button>
                <button className="updateBtnPost"
                    onClick={updateClick}>{isUpdateClicked ? 'Submit' : 'Update'}</button>
                <br />
                <br />
               
            </div>
        </div>
    );
}

export default ItemCard;
