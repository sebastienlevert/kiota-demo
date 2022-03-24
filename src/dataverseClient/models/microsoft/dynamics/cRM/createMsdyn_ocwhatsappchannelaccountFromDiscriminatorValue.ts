import {Msdyn_ocwhatsappchannelaccount} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_ocwhatsappchannelaccountFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_ocwhatsappchannelaccount {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_ocwhatsappchannelaccount();
}
