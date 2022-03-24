import {Msdyn_purchaseordersubstatus} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_purchaseordersubstatusFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_purchaseordersubstatus {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_purchaseordersubstatus();
}
