import {Msdyn_purchaseorderreceiptproduct} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_purchaseorderreceiptproductFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_purchaseorderreceiptproduct {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_purchaseorderreceiptproduct();
}
