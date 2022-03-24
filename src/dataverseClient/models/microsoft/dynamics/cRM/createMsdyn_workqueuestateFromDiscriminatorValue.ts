import {Msdyn_workqueuestate} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_workqueuestateFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_workqueuestate {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_workqueuestate();
}
