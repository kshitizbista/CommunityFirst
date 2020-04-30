import Api from "./Api";

class AuthApi {
    signIn({email, password}) {
        return Api.post('/auth/signin', {email, password});
    }

    signUp({firstname, lastname, email, password}) {
        return Api.post('/auth/signup', {firstname, lastname, email, password});
    }
}

export default new AuthApi();
