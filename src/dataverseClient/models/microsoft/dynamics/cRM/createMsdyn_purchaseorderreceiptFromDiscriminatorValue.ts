import {Msdyn_purchaseorderreceipt} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_purchaseorderreceiptFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_purchaseorderreceipt {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_purchaseorderreceipt();
}
