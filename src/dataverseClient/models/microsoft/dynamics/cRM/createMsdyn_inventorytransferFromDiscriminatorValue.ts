import {Msdyn_inventorytransfer} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_inventorytransferFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_inventorytransfer {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_inventorytransfer();
}
