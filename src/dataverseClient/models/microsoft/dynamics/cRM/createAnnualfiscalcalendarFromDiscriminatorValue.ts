import {Annualfiscalcalendar} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAnnualfiscalcalendarFromDiscriminatorValue(parseNode: ParseNode | undefined) : Annualfiscalcalendar {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Annualfiscalcalendar();
}
