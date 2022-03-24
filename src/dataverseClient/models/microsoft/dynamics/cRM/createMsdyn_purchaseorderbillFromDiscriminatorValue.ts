import {Msdyn_purchaseorderbill} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_purchaseorderbillFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_purchaseorderbill {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_purchaseorderbill();
}
