import React from "react";
import ItemResponseForm from "./ItemResponseForm";
import ItemResponse from "./ItemResponse";
import ItemResponsesApi from "../../api/ItemResponsesApi";

class ItemResponseList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            itemResponses : []
        };
    }

    async createItemResponse(itemResponseData) {
        try {
            const response = await ItemResponsesApi.createItemResponse(itemResponseData, this.props.itemId);
            const itemResponse = response.data;
            const newItemResponses = this.state.itemResponses.concat(itemResponse);

            this.setState({
                itemResponses: newItemResponses,
            });
        } catch (e) {
            console.error(e);
        }
    }

    async deleteItemResponse(itemResponse) {
        try {
            await ItemResponsesApi.deleteItemResponse(itemResponse.id);
            const newItemResponses = this.state.itemResponses.filter(p => p.id !== itemResponse.id);
            this.setState({
                itemResponses: newItemResponses,
            });
        } catch (e) {
            console.error(e);
        }
    }

    async updateItemResponse(itemResponseID, itemResponseData) {
        try {
            let updatedItemResponse = {};
            updatedItemResponse.id = itemResponseID;
            updatedItemResponse.body = itemResponseData;

            const response = await ItemResponsesApi.updateItemResponse(updatedItemResponse);
            const item = response.data;

            const newItemResponses = this.state.itemResponse.filter(p => p.id !== itemResponseID).concat(item);

            this.setState({
                items: newItemResponses,
            });
        } catch (e) {
            console.error(e);
        }
    }
    componentDidMount() {
        ItemResponsesApi.getItemResponseByItemId(this.props.itemId)
            .then(({data}) => this.setState({itemResponses: data}))
            .catch(err => console.error(err));
    }

    render() {
        const itemResponses = this.state.itemResponses;

        return (
            <div>
                <ItemResponseForm onSubmit={(itemResponseData) => this.createItemResponse(itemResponseData)}/>
                {itemResponses.map(itemResponse =>
                    <ItemResponse key={itemResponse.id} itemResponse={itemResponse} onDeleteClick={() => this.deleteItemResponse(itemResponse)}
                    onUpdateClick={(itemResponseData) => this.updateItemResponse(itemResponse.id, itemResponseData)} />
                )}
            </div>
        );
    }
}

export default ItemResponseList;