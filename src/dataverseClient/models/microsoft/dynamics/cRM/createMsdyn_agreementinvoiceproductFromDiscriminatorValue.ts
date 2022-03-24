import {Msdyn_agreementinvoiceproduct} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_agreementinvoiceproductFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_agreementinvoiceproduct {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_agreementinvoiceproduct();
}
