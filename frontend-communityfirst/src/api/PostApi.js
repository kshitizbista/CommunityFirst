import Api from "./Api";

class PostApi {

    getPostByCommunityIdAndServiceType(communityId, serviceType) {
        return Api.post('/services?communityId=' + communityId, serviceType);
    }

    saveServicePost(serviceData) {
        return Api.post("/services/create", serviceData)
    }

    getPostByUserIdAndServiceType(userId, serviceType) {
        return Api.post('/services?userId=' + userId, serviceType);
    }

    deletePost(postId) {
        return Api.delete('/services/'+ postId);
    }
    getPostByCommunityIdAndItemType(communityId, itemType) {
        return Api.post('/items?communityId=' + communityId, itemType);
    }

    saveItemPost(itemData) {
        return Api.post("/items/create", itemData)
    }

    getPostByUserIdAndItemType(userId, itemType) {
        return Api.post('/items?userId=' + userId, itemType);
    }

}

export default new PostApi();
