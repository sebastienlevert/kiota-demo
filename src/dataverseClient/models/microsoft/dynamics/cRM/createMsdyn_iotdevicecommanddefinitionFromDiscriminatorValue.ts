import {Msdyn_iotdevicecommanddefinition} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_iotdevicecommanddefinitionFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_iotdevicecommanddefinition {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_iotdevicecommanddefinition();
}
