import {Msdyn_conversationinsight} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_conversationinsightFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_conversationinsight {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_conversationinsight();
}
