import {Msdyn_incidenttypeservicetask} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_incidenttypeservicetaskFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_incidenttypeservicetask {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_incidenttypeservicetask();
}
