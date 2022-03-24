import {Msdyn_occustommessagingchannel} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_occustommessagingchannelFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_occustommessagingchannel {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_occustommessagingchannel();
}
