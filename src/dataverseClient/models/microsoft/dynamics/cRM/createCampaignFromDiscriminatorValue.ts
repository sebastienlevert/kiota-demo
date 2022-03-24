import {Campaign} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCampaignFromDiscriminatorValue(parseNode: ParseNode | undefined) : Campaign {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Campaign();
}
