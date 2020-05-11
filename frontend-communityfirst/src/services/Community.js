const communityIdKey = "_communityId";

class Community {

    setCommunityId(communityId) {
        window.sessionStorage.setItem(communityIdKey, communityId);
    }

    getCommunityId() {
        return window.sessionStorage.getItem(communityIdKey);
    }

    clearCommunityId() {
        return window.sessionStorage.removeItem(communityIdKey);
    }
}


export default new Community();
