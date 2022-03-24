import {Msdyn_geofencingsettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_geofencingsettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_geofencingsettings {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_geofencingsettings();
}
