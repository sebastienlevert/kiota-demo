import {Msdyn_channel} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_channelFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_channel {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_channel();
}
