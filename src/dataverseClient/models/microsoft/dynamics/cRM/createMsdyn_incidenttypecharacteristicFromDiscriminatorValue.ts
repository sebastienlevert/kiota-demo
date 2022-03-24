import {Msdyn_incidenttypecharacteristic} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_incidenttypecharacteristicFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_incidenttypecharacteristic {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_incidenttypecharacteristic();
}
