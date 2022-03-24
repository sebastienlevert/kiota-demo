import {Msdyn_resourceassignment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_resourceassignmentFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_resourceassignment {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_resourceassignment();
}
