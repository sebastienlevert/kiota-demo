import {Msdyn_assignmentconfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_assignmentconfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_assignmentconfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_assignmentconfiguration();
}
