import {Entitlementproducts} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEntitlementproductsFromDiscriminatorValue(parseNode: ParseNode | undefined) : Entitlementproducts {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Entitlementproducts();
}
