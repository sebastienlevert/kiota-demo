import {Msdyn_personalmessage} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_personalmessageFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_personalmessage {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_personalmessage();
}
