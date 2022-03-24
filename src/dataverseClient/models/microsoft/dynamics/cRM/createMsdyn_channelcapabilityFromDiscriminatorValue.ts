import {Msdyn_channelcapability} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_channelcapabilityFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_channelcapability {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_channelcapability();
}
