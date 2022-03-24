import {Msdyn_ocwhatsappchannelnumber} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_ocwhatsappchannelnumberFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_ocwhatsappchannelnumber {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_ocwhatsappchannelnumber();
}
