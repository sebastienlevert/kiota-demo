import {Msdyn_ocoutboundmessage} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_ocoutboundmessageFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_ocoutboundmessage {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_ocoutboundmessage();
}
