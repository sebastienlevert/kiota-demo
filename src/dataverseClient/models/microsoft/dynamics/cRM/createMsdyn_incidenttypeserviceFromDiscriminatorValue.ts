import {Msdyn_incidenttypeservice} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_incidenttypeserviceFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_incidenttypeservice {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_incidenttypeservice();
}
