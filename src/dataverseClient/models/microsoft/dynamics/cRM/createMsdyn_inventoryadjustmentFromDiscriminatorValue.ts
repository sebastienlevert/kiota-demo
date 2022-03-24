import {Msdyn_inventoryadjustment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_inventoryadjustmentFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_inventoryadjustment {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_inventoryadjustment();
}
