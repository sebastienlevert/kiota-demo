import {Msdyn_opportunitypricelist} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_opportunitypricelistFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_opportunitypricelist {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_opportunitypricelist();
}
