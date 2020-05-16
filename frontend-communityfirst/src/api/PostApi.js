import Api from "./Api";

class PostApi {

    getPostByCommunityIdAndServiceType(communityId, serviceType, searchText) {
        return Api.post('/services?communityId=' + communityId + '&searchText=' + searchText, serviceType);
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

    updatePost(post) {
        return Api.put('/services', post);
    }
}

export default new PostApi();
