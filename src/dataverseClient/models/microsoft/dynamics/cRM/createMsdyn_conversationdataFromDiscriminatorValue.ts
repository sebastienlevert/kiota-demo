import {Msdyn_conversationdata} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_conversationdataFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_conversationdata {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_conversationdata();
}
