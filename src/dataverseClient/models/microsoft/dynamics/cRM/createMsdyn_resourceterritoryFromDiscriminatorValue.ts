import {Msdyn_resourceterritory} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_resourceterritoryFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_resourceterritory {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_resourceterritory();
}
