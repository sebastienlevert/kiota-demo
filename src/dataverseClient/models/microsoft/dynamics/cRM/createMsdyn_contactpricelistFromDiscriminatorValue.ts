import {Msdyn_contactpricelist} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_contactpricelistFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_contactpricelist {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_contactpricelist();
}
