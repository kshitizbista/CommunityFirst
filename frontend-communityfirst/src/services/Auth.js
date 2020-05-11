import AuthApi from "../api/AuthApi";
import Community from "./Community";

const tokenKey = "_token";
const userIdKey = "_userId";

// Disclaimer: This simple auth implementation is for development purposes only.

class Auth {

    isLoggedIn() {
        return this._getToken() != null;
    }

    async signIn(loginData) {
        return await this._login(AuthApi.signIn, loginData);
    }

    async signUp(registrationData) {
        return await this._register(AuthApi.signUp, registrationData);
    }

    logout() {
        this._clearToken();
        this._clearUserId();
        Community.clearCommunityId();
    }

    getAuthorizationHeader() {
        return "Bearer " + this._getToken();
    }

    async _login(action, data) {
        try {
            const response = await action(data);
            this._setToken(response.data.token);
            this._setUserId(response.data.userId)
            return true;
        } catch (e) {
            console.error(e);
            return false;
        }
    }

    async _register(action, data) {
        try {
            const response = await action(data);
            return {
                successful: true,
                message: response.data.message
            };
        } catch (error) {
            const resMessage =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return {
                successful: false,
                message: resMessage
            };
        }
    }

    _getToken() {
        return window.sessionStorage.getItem(tokenKey);
    }

    _setToken(token) {
        window.sessionStorage.setItem(tokenKey, token);
    }

    _clearToken() {
        window.sessionStorage.removeItem(tokenKey);
    }

    _setUserId(userId) {
        window.sessionStorage.setItem(userIdKey, userId);
    }

    getUserId() {
        return window.sessionStorage.getItem(userIdKey);
    }

    _clearUserId() {
        return window.sessionStorage.removeItem(userIdKey);
    }
}


export default new Auth();
