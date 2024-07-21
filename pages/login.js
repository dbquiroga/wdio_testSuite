
class Login {

async login (username, password){
    await this.username.setValue(username);
    await this.password.setValue(password);
    await this.loginButton.click();
}

}

class LoginOragngeHrm extends Login{
    get username() { return $('[name="username"]') }
    get password() { return $('[name="password"]') }

}

module.exports = new LoginOragngeHrm();





