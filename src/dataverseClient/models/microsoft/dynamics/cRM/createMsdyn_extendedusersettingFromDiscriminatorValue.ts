import {Msdyn_extendedusersetting} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_extendedusersettingFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_extendedusersetting {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_extendedusersetting();
}
