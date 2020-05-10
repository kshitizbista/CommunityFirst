import Api from "./Api";

class ItemsApi {
    getAllItems() {
        return Api.get('/items');
    }

    getItemById(id) {
        return Api.get('/items/'+id);
    }

    createItem(item) {
        return Api.post('/items', item);
    }

    updateItem(item) {
        return Api.put('/items', item);
    }

    deleteItem(id) {
        return Api.delete('/items/'+id);
    } 
}

export default new ItemsApi();