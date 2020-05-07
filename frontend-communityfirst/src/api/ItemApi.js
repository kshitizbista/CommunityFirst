import Api from "./Api";

class ItemApi {
    getAllItemPosts() {
        return Api.get('/items');
    }

    getItemPostById(id) {
        return Api.get('/items/' + id);
    }

    createItemPost(post) {
        return Api.post('/items', post);
    }

    updateItemPost(post) {
        return Api.put('/items', post);
    }

    deleteItemPost(id) {
        return Api.delete('/items/' + id);
    }
}

export default new ItemApi();