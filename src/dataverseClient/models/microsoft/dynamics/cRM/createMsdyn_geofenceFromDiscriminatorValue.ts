import {Msdyn_geofence} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_geofenceFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_geofence {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_geofence();
}
