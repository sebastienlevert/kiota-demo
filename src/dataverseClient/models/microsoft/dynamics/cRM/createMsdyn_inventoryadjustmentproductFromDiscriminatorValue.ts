import {Msdyn_inventoryadjustmentproduct} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_inventoryadjustmentproductFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_inventoryadjustmentproduct {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_inventoryadjustmentproduct();
}
