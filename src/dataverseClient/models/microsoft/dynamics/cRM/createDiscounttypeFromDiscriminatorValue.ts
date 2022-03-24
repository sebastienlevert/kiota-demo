import {Discounttype} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDiscounttypeFromDiscriminatorValue(parseNode: ParseNode | undefined) : Discounttype {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Discounttype();
}
