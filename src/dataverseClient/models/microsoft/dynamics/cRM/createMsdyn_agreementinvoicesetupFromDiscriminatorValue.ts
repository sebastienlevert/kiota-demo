import {Msdyn_agreementinvoicesetup} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_agreementinvoicesetupFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_agreementinvoicesetup {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_agreementinvoicesetup();
}
