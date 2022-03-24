import {Entitlementtemplateproducts} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEntitlementtemplateproductsFromDiscriminatorValue(parseNode: ParseNode | undefined) : Entitlementtemplateproducts {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Entitlementtemplateproducts();
}
