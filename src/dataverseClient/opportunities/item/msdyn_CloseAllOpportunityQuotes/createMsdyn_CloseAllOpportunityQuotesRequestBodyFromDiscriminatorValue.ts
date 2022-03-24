import {Msdyn_CloseAllOpportunityQuotesRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_CloseAllOpportunityQuotesRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_CloseAllOpportunityQuotesRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_CloseAllOpportunityQuotesRequestBody();
}
