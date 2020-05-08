import Api from "./Api";

class LocationApi {
    getAllCities() {
        return Api.get('/cities');
    }

    getCommunityByCityId(id) {
        return Api.get("/cities/communities?id=" + id);
    }
}

export default new LocationApi();
