import {Msdyn_assignmentmap} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_assignmentmapFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_assignmentmap {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_assignmentmap();
}
