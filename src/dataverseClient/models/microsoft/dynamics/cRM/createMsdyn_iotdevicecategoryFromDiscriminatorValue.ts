import {Msdyn_iotdevicecategory} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_iotdevicecategoryFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_iotdevicecategory {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_iotdevicecategory();
}
