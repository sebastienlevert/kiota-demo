import {Opportunitycompetitors} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOpportunitycompetitorsFromDiscriminatorValue(parseNode: ParseNode | undefined) : Opportunitycompetitors {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Opportunitycompetitors();
}
