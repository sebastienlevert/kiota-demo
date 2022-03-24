import {OpportunityproductCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOpportunityproductCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : OpportunityproductCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OpportunityproductCollectionResponse();
}
