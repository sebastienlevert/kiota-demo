import {Msdyn_iotdeviceproperty} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_iotdevicepropertyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_iotdeviceproperty {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_iotdeviceproperty();
}
