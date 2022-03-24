import {Msdyn_approvalset} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_approvalsetFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_approvalset {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_approvalset();
}
