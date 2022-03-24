import {Msdyn_workorderdetailsgenerationqueue} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_workorderdetailsgenerationqueueFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_workorderdetailsgenerationqueue {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_workorderdetailsgenerationqueue();
}
