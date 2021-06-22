import { LightningElement, api } from 'lwc';

export default class CommunityReadOnly extends LightningElement {
    @api recordId;
    @api objectApiName;
    @api fieldApiNames;
    @api density;
    @api columnsToDisplay;

    get fieldsToDisplay() {
        if (this.fieldApiNames) {
            return this.fieldApiNames.split(';');
        }
        return [];
    }

    get columnCss() {
        return 'slds-col slds-size_1-of-' + this.columnsToDisplay;
    }
}