import {Msdyn_smsengagementctx} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_smsengagementctxFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_smsengagementctx {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_smsengagementctx();
}
