import Api from "./Api";

class ItemResponsesApi {
    getAllItemResponses() {
        return Api.get('/itemResponses');
    }

    getItemResponseByItemId(itemId) {
        return Api.get('/itemResponses?itemId='+ itemId);
    }

    createItemResponse(itemResponse, itemId) {
        return Api.post('/itemResponses?itemId=' + itemId, itemResponse);
    }

    updateItemResponse(itemResponse) {
        return Api.put('/itemResponses', itemResponse);
    }

    deleteItemResponse(id) {
        return Api.delete('/itemResponses/'+id);
    }
}

export default new ItemResponsesApi();