import {LeadCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLeadCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : LeadCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LeadCollectionResponse();
}
