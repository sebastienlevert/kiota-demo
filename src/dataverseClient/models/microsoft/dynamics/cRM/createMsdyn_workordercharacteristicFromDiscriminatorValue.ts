import {Msdyn_workordercharacteristic} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_workordercharacteristicFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_workordercharacteristic {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_workordercharacteristic();
}
