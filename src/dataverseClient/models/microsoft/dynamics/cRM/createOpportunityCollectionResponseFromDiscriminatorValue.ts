import {OpportunityCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOpportunityCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : OpportunityCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OpportunityCollectionResponse();
}
