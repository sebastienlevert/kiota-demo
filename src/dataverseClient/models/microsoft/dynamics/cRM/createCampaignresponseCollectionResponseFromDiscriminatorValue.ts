import {CampaignresponseCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCampaignresponseCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : CampaignresponseCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CampaignresponseCollectionResponse();
}
