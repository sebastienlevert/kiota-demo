import {Entitlementtemplate} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEntitlementtemplateFromDiscriminatorValue(parseNode: ParseNode | undefined) : Entitlementtemplate {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Entitlementtemplate();
}
