import {Campaignactivityitem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCampaignactivityitemFromDiscriminatorValue(parseNode: ParseNode | undefined) : Campaignactivityitem {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Campaignactivityitem();
}
