import {Msdyn_incidenttyperesolution} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_incidenttyperesolutionFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_incidenttyperesolution {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_incidenttyperesolution();
}
