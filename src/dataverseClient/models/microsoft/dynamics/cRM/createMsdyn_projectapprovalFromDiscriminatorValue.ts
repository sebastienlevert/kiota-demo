import {Msdyn_projectapproval} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_projectapprovalFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_projectapproval {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_projectapproval();
}
