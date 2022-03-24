import {CalculateActualValueOpportunityResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCalculateActualValueOpportunityResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : CalculateActualValueOpportunityResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CalculateActualValueOpportunityResponse();
}
