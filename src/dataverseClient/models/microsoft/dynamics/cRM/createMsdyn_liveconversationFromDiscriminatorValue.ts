import {Msdyn_liveconversation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_liveconversationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_liveconversation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_liveconversation();
}
