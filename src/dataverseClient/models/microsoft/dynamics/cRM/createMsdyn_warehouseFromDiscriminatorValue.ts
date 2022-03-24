import {Msdyn_warehouse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_warehouseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_warehouse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_warehouse();
}
