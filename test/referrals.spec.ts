import {expect} from 'chai';
import logins  from 'src/data/logins.json';
import patientData from 'src/data/referral.json'
import LoginPage from 'src/pages/LogInPage';
import HomePage from 'src/pages/HomePage';
import ReferralPage from 'src/pages/ReferralPage';
import helper from 'src/support/helper';


describe('Add a new referral succesfully', () => {
    let generatedLastName: string;
    let fullName: string;

    before(function(done){
        generatedLastName = helper.makeString();
        fullName =  patientData.patient.name + " " + generatedLastName;

    });

    it('login using a valid account', () => {
        LoginPage.open;
        LoginPage.loginWithCredentials(logins.user.email, logins.user.password);

    });

    it('access the Referral page', () => {
        HomePage.referralsSection;
    });

    it('click on the Add Referral button', () => {
        ReferralPage.addReferral;
    });

    it('filling patient personal info', () => {
        ReferralPage.fullName.setValue(fullName);
        ReferralPage.dateOfBirth.setValue(patientData.patient.dateOfBirth);
        ReferralPage.streetAddress.setValue(patientData.patient.streetAddress);
        ReferralPage.addressDetails.setValue(patientData.patient.addressDetails);
        ReferralPage.phoneNumber.setValue(patientData.patient.tellphoneNumber);
        
    });

    it('filling appointment info', () => {
        ReferralPage.facility.click();
        ReferralPage.customDropdownSelect("facility",patientData.patient.facility);
        ReferralPage.provider.click();
        browser.pause(3000);
        ReferralPage.customDropdownSelect("provider", patientData.patient.provider);
        ReferralPage.appointmentType.click();
        ReferralPage.customDropdownSelect("appointmentType", patientData.patient.appointmentType);
        ReferralPage.refferingProvider.click();
        ReferralPage.customDropdownSelect("referringProvider", patientData.patient.referringProvider);
        ReferralPage.reasonForVisit.setValue(patientData.patient.reasonForVisit);
        ReferralPage.notes.setValue(patientData.patient.notes);
        ReferralPage.saveReferral.click();
        browser.pause(3000);

    });

    it('access the created referral', () => {
        browser.refresh();
        ReferralPage.createdReferral(generatedLastName);

    });

    it('validating the created referral data', () => {
        browser.waitUntil( 
            () => {return ReferralPage.appointmentType.getText() !== 'Search';}, 
            2000, 'Elements and its values are not being displayed'
            );
            browser.pause(5000);
    
        expect(ReferralPage.dateOfBirthText).to.contains(patientData.patient.dateOfBirth);
        expect(ReferralPage.reasonForVisitText).to.contains(patientData.patient.reasonForVisit);    
        expect(ReferralPage.notesText).to.contains(patientData.patient.notes);

    });
    

});
