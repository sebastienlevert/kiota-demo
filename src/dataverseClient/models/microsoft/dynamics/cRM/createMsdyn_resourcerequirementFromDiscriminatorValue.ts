import {Msdyn_resourcerequirement} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_resourcerequirementFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_resourcerequirement {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_resourcerequirement();
}
