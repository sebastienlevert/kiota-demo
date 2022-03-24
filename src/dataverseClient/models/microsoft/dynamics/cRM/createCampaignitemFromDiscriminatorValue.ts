import {Campaignitem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCampaignitemFromDiscriminatorValue(parseNode: ParseNode | undefined) : Campaignitem {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Campaignitem();
}
