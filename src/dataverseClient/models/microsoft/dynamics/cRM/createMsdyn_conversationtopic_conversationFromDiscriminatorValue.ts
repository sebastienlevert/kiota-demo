import {Msdyn_conversationtopic_conversation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_conversationtopic_conversationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_conversationtopic_conversation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_conversationtopic_conversation();
}
