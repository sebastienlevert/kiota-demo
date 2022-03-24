import {Msdyn_ocsessioncharacteristic} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_ocsessioncharacteristicFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_ocsessioncharacteristic {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_ocsessioncharacteristic();
}
