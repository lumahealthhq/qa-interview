import BasePage from 'src/pages/BasePage';

class ReferralPage extends BasePage {

    get addReferral(){
        return $('span=Add Referral').click();
    }

    get fullName(){
        return $('[placeholder="First Name Last Name"]');
    }

    get dateOfBirth(){
        return $('[name="patientValues.dateOfBirth"]');
    }

    get dateOfBirthText(){
        return $('[name="patientValues.dateOfBirth"]').getValue();
    }

    get streetAddress(){
        return $('[placeholder="Search for address"]');
    }

    get addressDetails(){
        return $('[name="patientValues.addressDetails"]');
    }

    get phoneNumber(){
        return $('[placeholder="123-456-7890"]');
    }

    get facility(){
        return $('#react-select-4--value');
    }

    get provider(){
        return $('#react-select-5--value');
    }

    get appointmentType(){
        return $('#react-select-6--value');
    }

    get icd9(){
        return $('#react-select-7--value');
    }

    get icd10(){
        return $('#react-select-8--value');
    }

    get refferingProvider(){
        return $('#react-select-9--value');
    }

    get reasonForVisit(){
        return $('[name="reason"]');
    }

    get reasonForVisitText(){
        return $('[name="reason"]').getText();
    }

    get notes(){
        return $('[name="customerNotes"]');
    }

    get notesText(){
        return $('[name="customerNotes"]').getText();
    }

    get saveReferral(){
        return $('span=Save');
    }

    createdReferral(patientName){
        var createdReferralRow = '//span[contains(text(),"${option}")]';
        return $(createdReferralRow.replace('${option}', patientName)).click();
    }

    customDropdownSelect(dropdownName,option){
        switch (dropdownName) {
            case "facility":
                var dropdownOption = '//*[@id="react-select-4--list"]/div[contains(text(),"${option}")]';
                return $(dropdownOption.replace('${option}', option)).click();
                break;
            case "provider":
                var dropdownOption = '//*[@id="react-select-5--list"]/div[contains(text(),"${option}")]';
                return $(dropdownOption.replace('${option}', option)).click();
                break;
            case "appointmentType":
                var dropdownOption = '//*[@id="react-select-6--list"]/div[contains(text(),"${option}")]';
                return $(dropdownOption.replace('${option}', option)).click();
                break;
            case "icd9":
                var dropdownOption = '//*[@id="react-select-7--list"]/div[contains(text(),"${option}")]';
                return $(dropdownOption.replace('${option}', option)).click();
                break;
            case "icd10":
                var dropdownOption = '//*[@id="react-select-8--list"]/div[contains(text(),"${option}")]';
                return $(dropdownOption.replace('${option}', option)).click();
                break;
            case "referringProvider":
                var dropdownOption = '//*[@id="react-select-9--list"]/div[contains(text(),"${option}")]';
                return $(dropdownOption.replace('${option}', option)).click();
                break;
            default:
                break;
        }

    }


}
export default new ReferralPage();