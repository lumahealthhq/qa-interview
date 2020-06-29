import BasePage from 'src/pages/BasePage';

class LoginPage extends BasePage {

    get username() {
        return $('[name="email"]');
    }

    get password() {
        return $('[name="password"]');
    }

    get submit() {
        return $('span=Sign in');
    }

    get open() {
        return browser.url('/login');
    }

    loginWithCredentials(username, password) {
        this.username.setValue(username);
        this.password.setValue(password);
        this.submit.click();
    }
}

export default new LoginPage();
