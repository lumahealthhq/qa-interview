import {expect} from 'chai';
import LoginPage from 'src/pages/LogInPage';
import logins  from 'src/data/logins.json';

describe('Login page', () => {
    it('displays message with invalid credentials', () => {
        LoginPage.open;
        LoginPage.loginWithCredentials(logins.user.email, logins.user.password);

    });

});
