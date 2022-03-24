import {Msdyn_workorderservicetask} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_workorderservicetaskFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_workorderservicetask {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_workorderservicetask();
}
