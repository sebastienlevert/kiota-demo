import {Msdyn_geolocationtracking} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_geolocationtrackingFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_geolocationtracking {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_geolocationtracking();
}
