import {Msdyn_ocprovisioningstate} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_ocprovisioningstateFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_ocprovisioningstate {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_ocprovisioningstate();
}
