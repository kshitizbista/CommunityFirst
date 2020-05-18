import Api from "./Api";

class ItemPostApi {

    getPostByCommunityIdAndItemType(communityId, itemType, searchText) {
        return Api.post('/items?communityId=' + communityId + '&searchText=' + searchText, itemType);
    }

    saveItemPost(itemData) {
        return Api.post("/items/create", itemData)
    }

    getPostByUserIdAndItemType(userId, itemType, searchText) {
        return Api.post('/items?userId=' + userId + '&searchText=' + searchText, itemType);
    }

    deletePost(postId) {
        return Api.delete('/items/' + postId);
    }
    updatePost(post) {
        return Api.put('/items', post);
    }

}

export default new ItemPostApi();
