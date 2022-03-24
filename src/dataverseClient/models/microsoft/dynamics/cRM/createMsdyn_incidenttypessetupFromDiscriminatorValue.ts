import {Msdyn_incidenttypessetup} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_incidenttypessetupFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_incidenttypessetup {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_incidenttypessetup();
}
