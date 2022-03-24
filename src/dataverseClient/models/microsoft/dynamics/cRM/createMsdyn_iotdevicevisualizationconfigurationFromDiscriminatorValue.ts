import {Msdyn_iotdevicevisualizationconfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_iotdevicevisualizationconfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_iotdevicevisualizationconfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_iotdevicevisualizationconfiguration();
}
