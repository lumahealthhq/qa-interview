
class CasePage {

    get newCaseButton() {
        return $('#newCaseBtn').click();
    }
    
    get tailNumber() {
        return $('#tail');
    }

    get station() {
        return $('#station');
    }

    get discrepancy() {
        return $('#discrepancy');
    }

    get createCase() {
        return $('button=Create Case');
    }

    get autocompleteFirst() {
        return $('[id="autocompleteList"] li:first-child');
    }

    get createdCaseCardDescription () {
        return $('p*=This is a test case created by Automation');
    }

    createACase(tailNumber, station, discrepancy){
        this.tailNumber.setValue(tailNumber);
        this.station.setValue(station);
        this.station.click();
        this.autocompleteFirst.click();
        this.discrepancy.setValue(discrepancy);
        this.createCase.click();
    }

    
    
}

export default new CasePage();
