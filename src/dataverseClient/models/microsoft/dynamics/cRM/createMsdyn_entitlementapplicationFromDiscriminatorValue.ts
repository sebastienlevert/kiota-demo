import {Msdyn_entitlementapplication} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_entitlementapplicationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_entitlementapplication {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_entitlementapplication();
}
