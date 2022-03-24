import {Entitlementtemplatechannel} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEntitlementtemplatechannelFromDiscriminatorValue(parseNode: ParseNode | undefined) : Entitlementtemplatechannel {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Entitlementtemplatechannel();
}
