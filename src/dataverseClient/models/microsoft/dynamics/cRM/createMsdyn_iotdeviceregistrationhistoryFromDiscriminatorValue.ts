import {Msdyn_iotdeviceregistrationhistory} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_iotdeviceregistrationhistoryFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_iotdeviceregistrationhistory {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_iotdeviceregistrationhistory();
}
