import {Msdyn_agreementinvoicedate} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_agreementinvoicedateFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_agreementinvoicedate {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_agreementinvoicedate();
}
