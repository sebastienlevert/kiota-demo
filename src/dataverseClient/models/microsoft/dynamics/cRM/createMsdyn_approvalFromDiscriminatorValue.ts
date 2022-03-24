import {Msdyn_approval} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_approvalFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_approval {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_approval();
}
