import Api from "./Api";

class AuthApi {
    signIn({email, password}) {
        return Api.post('/auth/signin', {email, password});
    }

    signUp({name, email, password}) {
        return Api.post('/auth/signup', {name, email, password});
    }
}

export default new AuthApi();
