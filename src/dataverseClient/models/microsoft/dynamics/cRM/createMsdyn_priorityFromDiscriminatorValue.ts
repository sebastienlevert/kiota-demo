import {Msdyn_priority} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_priorityFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_priority {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_priority();
}
