import {Msdyn_occhannelconfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_occhannelconfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_occhannelconfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_occhannelconfiguration();
}
