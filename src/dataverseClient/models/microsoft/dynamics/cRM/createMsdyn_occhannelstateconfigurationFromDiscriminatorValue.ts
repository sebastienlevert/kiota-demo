import {Msdyn_occhannelstateconfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_occhannelstateconfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_occhannelstateconfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_occhannelstateconfiguration();
}
