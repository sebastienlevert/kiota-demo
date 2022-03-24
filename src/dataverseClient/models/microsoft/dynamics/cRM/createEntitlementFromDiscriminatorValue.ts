import {Entitlement} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEntitlementFromDiscriminatorValue(parseNode: ParseNode | undefined) : Entitlement {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Entitlement();
}
