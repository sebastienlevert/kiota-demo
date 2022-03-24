import {Msdyn_teamscollaboration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_teamscollaborationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_teamscollaboration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_teamscollaboration();
}
