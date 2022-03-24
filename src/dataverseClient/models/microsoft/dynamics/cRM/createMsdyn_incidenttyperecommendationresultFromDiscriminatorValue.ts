import {Msdyn_incidenttyperecommendationresult} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_incidenttyperecommendationresultFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_incidenttyperecommendationresult {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_incidenttyperecommendationresult();
}
