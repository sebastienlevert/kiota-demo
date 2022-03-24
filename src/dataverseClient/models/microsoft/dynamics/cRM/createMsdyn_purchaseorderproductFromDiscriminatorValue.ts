import {Msdyn_purchaseorderproduct} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_purchaseorderproductFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_purchaseorderproduct {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_purchaseorderproduct();
}
