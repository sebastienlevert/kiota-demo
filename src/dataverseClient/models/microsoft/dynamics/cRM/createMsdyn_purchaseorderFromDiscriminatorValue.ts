import {Msdyn_purchaseorder} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_purchaseorderFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_purchaseorder {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_purchaseorder();
}
