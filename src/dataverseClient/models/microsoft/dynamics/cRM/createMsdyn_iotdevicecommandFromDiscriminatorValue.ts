import {Msdyn_iotdevicecommand} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_iotdevicecommandFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_iotdevicecommand {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_iotdevicecommand();
}
