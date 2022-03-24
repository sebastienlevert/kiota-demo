import {Msdyn_iotdevice} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_iotdeviceFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_iotdevice {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_iotdevice();
}
