import {Msdyn_incidenttypeproduct} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_incidenttypeproductFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_incidenttypeproduct {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_incidenttypeproduct();
}
