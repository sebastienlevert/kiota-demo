import {Msdyn_conversationactionlocale} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_conversationactionlocaleFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_conversationactionlocale {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_conversationactionlocale();
}
