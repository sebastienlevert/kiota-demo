import {Msdyn_incidenttyperecommendationrunhistory} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_incidenttyperecommendationrunhistoryFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_incidenttyperecommendationrunhistory {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_incidenttyperecommendationrunhistory();
}
