import {Msdyn_workqueueusersetting} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_workqueueusersettingFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_workqueueusersetting {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_workqueueusersetting();
}
