import {Entitlementchannel} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEntitlementchannelFromDiscriminatorValue(parseNode: ParseNode | undefined) : Entitlementchannel {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Entitlementchannel();
}
