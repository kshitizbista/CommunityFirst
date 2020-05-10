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
}

export default new PostApi();
