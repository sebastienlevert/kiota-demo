import {Msdyn_cannedmessage} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_cannedmessageFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_cannedmessage {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_cannedmessage();
}
