import BasePage from 'src/pages/BasePage';

class HomePage extends BasePage {

    get referralsSection() {
        return $('span=Referrals').click();
    }
    
}

export default new HomePage();
