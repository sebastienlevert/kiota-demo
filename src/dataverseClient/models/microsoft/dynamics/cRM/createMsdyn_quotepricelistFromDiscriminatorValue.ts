import {Msdyn_quotepricelist} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_quotepricelistFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_quotepricelist {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_quotepricelist();
}
