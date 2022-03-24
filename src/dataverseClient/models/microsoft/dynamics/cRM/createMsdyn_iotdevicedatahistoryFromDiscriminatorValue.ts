import {Msdyn_iotdevicedatahistory} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_iotdevicedatahistoryFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_iotdevicedatahistory {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_iotdevicedatahistory();
}
