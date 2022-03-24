import {Discount} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDiscountFromDiscriminatorValue(parseNode: ParseNode | undefined) : Discount {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Discount();
}
