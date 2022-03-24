import {Entitlementcontacts} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEntitlementcontactsFromDiscriminatorValue(parseNode: ParseNode | undefined) : Entitlementcontacts {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Entitlementcontacts();
}
