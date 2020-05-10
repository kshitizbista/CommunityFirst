import Api from "./Api";

class PostApi {

    getPostByServiceType(communityId, serviceType) {
        return Api.post('/services/' + communityId, serviceType);
    }

    getCommunityByCityId(id) {
        return Api.get("/cities/communities?id=" + id);
    }

    saveServicePost(serviceData) {
        return Api.post("/services", serviceData)
    }
}

export default new PostApi();
