import {Msdyn_invoicelinetransaction} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_invoicelinetransactionFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_invoicelinetransaction {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_invoicelinetransaction();
}
