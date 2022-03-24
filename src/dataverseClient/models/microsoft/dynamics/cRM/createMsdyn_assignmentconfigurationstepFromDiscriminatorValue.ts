import {Msdyn_assignmentconfigurationstep} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_assignmentconfigurationstepFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_assignmentconfigurationstep {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_assignmentconfigurationstep();
}
