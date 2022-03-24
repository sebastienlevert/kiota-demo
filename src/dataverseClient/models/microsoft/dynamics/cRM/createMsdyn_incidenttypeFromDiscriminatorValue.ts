import {Msdyn_incidenttype} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_incidenttypeFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_incidenttype {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_incidenttype();
}
