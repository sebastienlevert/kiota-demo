import {Campaignresponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCampaignresponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Campaignresponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Campaignresponse();
}
