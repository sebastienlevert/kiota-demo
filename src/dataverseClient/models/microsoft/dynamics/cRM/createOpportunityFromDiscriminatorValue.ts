import {Opportunity} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOpportunityFromDiscriminatorValue(parseNode: ParseNode | undefined) : Opportunity {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Opportunity();
}
