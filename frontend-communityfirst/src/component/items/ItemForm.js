import React, {useState} from "react";
import {useForm} from "react-hook-form";

function ItemForm({onSubmit}) {
        const [itemcategory, setItemCategory] = useState("");
        const [itemdescription, setItemDescription] = useState("");
        const [offering, setOffering] = useState("");
        const {handleSubmit, register, errors} = useForm();

        return (
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Post your Item here!</h4>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input name="itemcategory"
                                           type="text"
                                           className="form-control form-control-lg"
                                           value={itemcategory}
                                           onChange={e => setItemCategory(e.target.value)}
                                           placeholder="Item Category"
                                           ref={register({required: true})}/>
                                    {errors.itemcategory && <span className="form-error">Item category is mandatory </span>}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input name="itemdescription"
                                           type="textbox"
                                           className="form-control form-control-lg"
                                           value={itemdescription}
                                           onChange={e => setItemDescription(e.target.value)}
                                           placeholder="itemdescription"
                                           ref={register({required: true})}/>
                                    {errors.itemdescription && <span className="form-error">ItemDescription is mandatory </span>}
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-6">
                                <div className="form-group">
                                Offering
                                    <input name="offering"
                                           type="checkbox"
                                           className="form-control form-control-lg"
                                           value={offering}
                                           onChange={e => setOffering(e.target.value)}
                                           />
                                </div>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary"
                            onSubmit={(e) => {
                                onSubmit({itemcategory, itemdescription, offering});
                            }}>
                            Create Item
                        </button>
                    </form>
                </div>
            </div>
        );
}

export default ItemForm;