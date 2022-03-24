import {Msdyn_opportunitypricelistCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_opportunitypricelistCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_opportunitypricelistCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_opportunitypricelistCollectionResponse();
}
