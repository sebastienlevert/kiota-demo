import {Msdyn_ocsystemmessage} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_ocsystemmessageFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_ocsystemmessage {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_ocsystemmessage();
}
