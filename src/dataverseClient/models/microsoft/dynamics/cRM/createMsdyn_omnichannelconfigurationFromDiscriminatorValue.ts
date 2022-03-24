import {Msdyn_omnichannelconfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_omnichannelconfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_omnichannelconfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_omnichannelconfiguration();
}
