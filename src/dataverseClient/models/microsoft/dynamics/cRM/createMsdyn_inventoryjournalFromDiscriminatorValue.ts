import {Msdyn_inventoryjournal} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_inventoryjournalFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_inventoryjournal {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_inventoryjournal();
}
