import {Msdyn_conversationaction} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_conversationactionFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_conversationaction {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_conversationaction();
}
