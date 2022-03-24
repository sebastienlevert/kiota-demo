import {Msdyn_workordertype} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_workordertypeFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_workordertype {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_workordertype();
}
