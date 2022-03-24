import {Msdyn_projectpricelist} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_projectpricelistFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_projectpricelist {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_projectpricelist();
}
