import {Campaignactivity} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCampaignactivityFromDiscriminatorValue(parseNode: ParseNode | undefined) : Campaignactivity {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Campaignactivity();
}
