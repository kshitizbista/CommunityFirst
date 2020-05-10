import React from "react";
import ItemsApi from "./../../api/ItemsApi";
import ItemForm from "./ItemForm";
import ItemCard from "./ItemCard";

class ItemsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };
    }

    async createItem(itemData) {
        try {
            const response = await ItemsApi.createItem(itemData);
            const item = response.data;
            const newItems = this.state.items.concat(item);

            this.setState({
                items: newItems,
            });
        } catch (e) {
            console.error(e);
        }
    }

    async updateItem(itemID, updatedText) {
        try {
            let updatedItem = {};
            updatedItem.id = itemID;
            updatedItem.body = updatedText;

            const response = await ItemsApi.updateItem(updatedItem);
            const item = response.data;

            const newItems = this.state.items.filter(p => p.id !== itemID).concat(item);

            this.setState({
                items: newItems,
            });
        } catch (e) {
            console.error(e);
        }
    }

    async deleteItem(item) {
        try {
            await ItemsApi.deleteItem(item.id);
            const newItems = this.state.items.filter(p => p.id !== item.id);
            this.setState({
                items: newItems,
            });
        } catch (e) {
            console.error(e);
        }
    }

    componentDidMount() {
        ItemsApi.getAllItems()
            .then(({data}) => this.setState({items: data}))
            .catch(err => console.error(err));
    }

    render() {
        const items = this.state.items;

        return (
            <div>

                <ItemForm onSubmit={(itemData) => this.createItem(itemData)}/>
                <h2> Community First Posts </h2>
                {items.map(item =>
                    <ItemCard key={item.id} item={item} onDeleteClick={() => this.deleteItem(item)}
                              onUpdateClick={(itemData) => this.updateItem(item.id, itemData)}/>
                )}

            </div>
        );
    }
}

export default ItemsPage;
