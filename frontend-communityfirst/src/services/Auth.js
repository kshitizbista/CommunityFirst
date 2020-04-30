import AuthApi from "../api/AuthApi";

const tokenKey = "_token";

// Disclaimer: This simple auth implementation is for development purposes only.

class Auth {
    // setLoggedIn = () => {
    // };

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
        // this.setLoggedIn(false);
        this._clearToken();
    }

    // bindLoggedInStateSetter(loggedInStateSetter) {
    //     this.setLoggedIn = loggedInStateSetter;
    // }

    getAuthorizationHeader() {
        return "Bearer " + this._getToken();
    }

    async _login(action, data) {
        try {
            const response = await action(data);
            this._setToken(response.data.token);
            // this.setLoggedIn(true);
            return true;
        } catch (e) {
            console.error(e);
            // this.setLoggedIn(false);
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
            // this.setLoggedIn(false);
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
}


export default new Auth();
