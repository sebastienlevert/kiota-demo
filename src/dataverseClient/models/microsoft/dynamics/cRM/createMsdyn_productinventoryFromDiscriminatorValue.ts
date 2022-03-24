import {Msdyn_productinventory} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_productinventoryFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_productinventory {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_productinventory();
}
